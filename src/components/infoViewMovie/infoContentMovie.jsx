import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MovieContent } from "./movieContent";
import { CarouselMovieSimilar } from "./carouselMovieSimilar";
import { Loading } from "../utils/loading";

export const InfoContentMovie = () => {
  const { id } = useParams();
  const paramsMovieData = `/movie/${id}?language=en-US`;
  const paramsMovieSimilar = `/movie/${id}/similar?language=en-US&page=1`;
  const paramsMovieVideo = `/movie/${id}/videos?language=en-US`;
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;

  const [movieData, setMovieData] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getMovieData = async () => {
    try {
      const response = await axios.get(baseUrl + paramsMovieData, config);
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getMovieSimilar = async () => {
    try {
      const response = await axios.get(baseUrl + paramsMovieSimilar, config);
      setMovieSimilar(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getMovieVideo = async () => {
    try {
      const response = await axios.get(baseUrl + paramsMovieVideo, config);
      setMovieVideo(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getMovieData();
      getMovieSimilar();
      getMovieVideo();
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getMovieData();
      getMovieSimilar();
      getMovieVideo();
    }, 750);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MovieContent movieData={movieData} movieVideo={movieVideo} />
          <CarouselMovieSimilar movieSimilar={movieSimilar} />
        </>
      )}
    </>
  );
};
