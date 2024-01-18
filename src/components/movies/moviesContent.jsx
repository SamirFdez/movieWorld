import React, { useState, useEffect } from "react";
import axios from "axios";
import { MoviesFilter } from "./moviesFilter";
import { MoviesResults } from "./moviesResults";
import { Pagination } from "../utils/pagination";
import { Loading } from "../utils/loading";

export const MoviesContent = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsGenresMovies = "/genre/movie/list?language=en";

  const [genresList, setGenresList] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [filterGenres, setFilterGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const moviesToShow = movieSearch === "" ? dataMovie : searchedMovie;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getGenresList = async () => {
    try {
      const response = await axios.get(baseUrl + paramsGenresMovies, config);
      setGenresList(response.data.genres);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getDataMovie = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${filterGenres}`,
        config
      );
      setDataMovie(response.data.results);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getSearchedMovie = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/search/movie?query=${movieSearch}&include_adult=false&language=en-US&page=${page}`,
        config
      );
      setSearchedMovie(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
      getGenresList();
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (movieSearch === "") {
        getDataMovie();
      } else {
        getSearchedMovie();
      }
    }, 750);
  }, [filterGenres, page, movieSearch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MoviesFilter
            genresList={genresList}
            setFilterGenres={setFilterGenres}
            movieSearch={movieSearch}
            setMovieSearch={setMovieSearch}
          />
          <MoviesResults dataMovie={moviesToShow} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </>
  );
};
