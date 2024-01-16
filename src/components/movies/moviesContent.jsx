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
  const [page, setPage] = useState(1);
  const [dataMovie, setDataMovie] = useState([]);
  const [filterGenres, setFilterGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getDataMovie = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${filterGenres}`,
        config
      );
      setDataMovie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
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

  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
      getGenresList();
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getDataMovie();
    }, 750);
  }, [filterGenres, page]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MoviesFilter genresList={genresList} />
          <MoviesResults dataMovie={dataMovie} />
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </>
  );
};
