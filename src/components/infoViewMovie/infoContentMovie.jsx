import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MovieContent } from "./movieContent";
import { Loading } from "../utils/loading";

export const InfoContentMovie = () => {
  const { id } = useParams();
  const params = `/movie/${id}?language=en-US`;
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getMovieData = async () => {
    try {
      const response = await axios.get(baseUrl + params, config);
      setMovieData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getMovieData();
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MovieContent movieData={movieData} />
      )}
    </>
  );
};
