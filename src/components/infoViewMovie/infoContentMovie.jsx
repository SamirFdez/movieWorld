import React, { useState, useEffect } from "react";
import axios from "axios";

export const InfoContentMovie = () => {
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

  const getMovieData = async (movieID) => {
    const params = `/movie/${movieID}?language=en-US`;
    try {
      const response = await axios.get(baseUrl + params, config);
      setMovieData(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    const currentPage = window.location.pathname;
    const movieID = currentPage.substring(currentPage.lastIndexOf("/") + 1)
    getMovieData(movieID);
  }, []);

  return <>
  
  </>;
};
