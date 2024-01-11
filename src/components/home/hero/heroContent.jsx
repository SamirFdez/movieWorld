import React, { useState, useEffect } from "react";
import { HeroMobile } from "./heroMobile";
import { HeroDesktop } from "./heroDesktop";
import axios from "axios";

import { Loading } from "../../utils/loading";

export const HeroContent = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsDataHero = `/trending/movie/week?language=en-US`;
  const paramsGenresMovie = `/genre/movie/list?language=en`;

  const [positionHero, setPositionHero] = useState(0);
  const [dataHero, setDataHero] = useState([]);
  const [dataMovieHero, setDataMovieHero] = useState({});
  const [genresMovie, setGenresMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getTrendingMovies = async () => {
    try {
      const response = await axios.get(baseUrl + paramsDataHero, config);
      setDataHero(response.data.results);
      setDataMovieHero(response.data.results[positionHero]);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getGenresMovie = async () => {
    try {
      const response = await axios.get(baseUrl + paramsGenresMovie, config);
      setGenresMovie(response.data.genres);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getTrendingMovies();
    getGenresMovie();
  }, []);

  useEffect(() => {
    getTrendingMovies();
  }, [positionHero]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroMobile />
          {/* <HeroDesktop
            dataMovieHero={dataMovieHero}
            genresMovie={genresMovie}
            dataHero={dataHero}
            positionHero={positionHero}
            setPositionHero={setPositionHero}
          /> */}
        </>
      )}
    </>
  );
};
