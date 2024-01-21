import React, { useState, useEffect } from "react";
import axios from "axios";
import { FilterData } from "../utils/filterData";
import { SeriesResults } from "../series/seriesResults";
import { Pagination } from "../utils/pagination";
import { NoDataFound } from "../utils/noDataFound";
import { Loading } from "../utils/loading";

export const SeriesContent = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsGenresSeries = "/genre/tv/list?language=en";

  const [genresList, setGenresList] = useState([]);
  const [dataSerie, setDataSerie] = useState([]);
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
      const response = await axios.get(baseUrl + paramsGenresSeries, config);
      setGenresList(response.data.genres);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getDataSerie = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/discover/tv?first_air_date_year=${year}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=${sortBy}&with_genres=${filterGenres}`,
        config
      );
      setDataSerie(response.data.results);
      setLoading(false);
      setTotalPages(response.data.total_pages);
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
  }, [filterGenres, year, sortBy]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getDataSerie();
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
        setPage={setPage}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <SeriesResults dataSerie={dataSerie} />
          {dataSerie.length ? (
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          ) : (
            <NoDataFound />
          )}
        </>
      )}
    </>
  );
};
