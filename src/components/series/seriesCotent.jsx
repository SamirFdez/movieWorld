import React, { useState, useEffect } from "react";
import axios from "axios";
import { SeriesFilter } from "./seriesFilter";
import { SeriesResults } from "./seriesResults";
import { Pagination } from "../utils/pagination";
import { Loading } from "../utils/loading";

export const SeriesContent = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsGenresSeries = "/genre/tv/list?language=en";

  const [genresList, setGenresList] = useState([]);
  const [page, setPage] = useState(1);
  const [dataSerie, setDataSerie] = useState([]);
  const [filterGenres, setFilterGenres] = useState("");
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getDataSerie = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${filterGenres}`,
        config
      );
      setDataSerie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getGenresList = async () => {
    try {
      const response = await axios.get(baseUrl + paramsGenresSeries, config);
      setGenresList(response.data.genres);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getDataSerie();
      getGenresList();
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getDataSerie();
    }, 750);
  }, [filterGenres, page]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SeriesFilter genresList={genresList} />
          <SeriesResults dataSerie={dataSerie} />
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </>
  );
};
