import React, { useState, useEffect } from "react";
import axios from "axios";
import { FilterMovies } from "./filterMovies";
import { MoviesResults } from "./moviesResults";
import { Loading } from "../utils/loading";

export const MoviesContent = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsGenresMovies = "/genre/movie/list?language=en";

  const [genresList, setGenresList] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [filterGenres, setFilterGenres] = useState("");
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
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${filterGenres}`,
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
    getDataMovie();
    getGenresList();
  }, []);

  useEffect(() => {
    getDataMovie();
  }, [filterGenres]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterMovies genresList={genresList} />
          <MoviesResults dataMovie={dataMovie} />
        </>
      )}
    </>
  );
};
