import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const CarouselGenres = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const apiKey = "2a3fff17b6b526d16701df6517c4b678";
  const params = `/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&primary_release_year=2023&primary_release_date.gte=2023-12&sort_by=popularity.desc`;

  const [genresList, setGenresList] = useState([]);
  const [genresMovies, setGenresMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getGenresMovies = async () => {
    try {
      const response = await axios.get(baseUrl + params, config);
      setGenresMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getGenresMovies();
  }, []);

  return( <>
  
  </>);
};
