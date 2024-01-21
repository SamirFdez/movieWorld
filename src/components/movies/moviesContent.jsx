import React, { useState, useEffect } from "react";
import axios from "axios";
import { FilterData } from "../utils/filterData";
import { MoviesResults } from "./moviesResults";
import { Pagination } from "../utils/pagination";
import { NoDataFound } from "../utils/noDataFound";
import { Loading } from "../utils/loading";

export const MoviesContent = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsGenresMovies = "/genre/movie/list?language=en";

  const [genresList, setGenresList] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [filterGenres, setFilterGenres] = useState([]);
  const [year, setYear] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

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
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=${year}&sort_by=${sortBy}&with_genres=${filterGenres}`,
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
  }, [filterGenres, year, sortBy]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getDataMovie();
    }, 750);
  }, [page]);

  return (
    <>
      <FilterData
        genresList={genresList}
        setFilterGenres={setFilterGenres}
        year={year}
        setYear={setYear}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <MoviesResults dataMovie={dataMovie} />
          {dataMovie.length ? (
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          ) : (
            <NoDataFound />
          )}
        </>
      )}
    </>
  );
};
