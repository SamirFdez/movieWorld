import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardsData } from "./cardsData";
import { NoDataFound } from "./noDataFound";

export const SearchData = ({ wordSearch }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsMovies = `/search/movie?query=${wordSearch}&include_adult=true&language=en-US&page=1`;
  const paramsSeries = `/search/tv?query=${wordSearch}&include_adult=false&language=en-US&page=1`;

  const [dataSearchedMovies, setDataSearchedMovies] = useState([]);
  const [dataSearchedSeries, setDataSearchedSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getDataSearchedMovies = async () => {
    try {
      const response = await axios.get(baseUrl + paramsMovies, config);
      setDataSearchedMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getDataSearchedSeries = async () => {
    try {
      const response = await axios.get(baseUrl + paramsSeries, config);
      setDataSearchedSeries(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getDataSearchedMovies();
    getDataSearchedSeries();
  }, [wordSearch]);

  return (
    <>
      {loading ? null : (
        <div className="container mx-auto" style={{ marginTop: "70px" }}>
          {dataSearchedMovies?.length !== 0 ||
          dataSearchedSeries?.length !== 0 ? (
            <>
              <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white tracking-wider">
                  Search results:
                </h1>
              </div>
              <div className="flex flex-wrap m-4">
                {dataSearchedMovies?.map((dataMovies, index) => (
                  <CardsData data={dataMovies} key={`movieSearched-${index}`} />
                ))}
                {dataSearchedSeries?.map((dataSeries, index) => (
                  <CardsData data={dataSeries} key={`serieeSearched-${index}`} />
                  ))}

              </div>
            </>
          ) : (
            <NoDataFound />
          )}
        </div>
      )}
    </>
  );
};
