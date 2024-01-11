import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SerieContent } from "./serieContent";
import { CarouselSerieRecommendation } from "./carouselSerieRecommendation";
import { Loading } from "../utils/loading";

export const InfoContentSerie = () => {
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsSerieData = `/tv/${id}?language=en-US`;
  const paramsSerieVideo = `/tv/${id}/videos?language=en-US`;
  const paramsSerieCredits = `/tv/${id}/season/1/credits?language=en-US`;
  const paramsSerieRecommendation = `/tv/${id}/recommendations?language=en-US&page=1`;

  const [serieData, setSerieData] = useState({});
  const [serieVideo, setSerieVideo] = useState([]);
  const [serieCredits, setSerieCredits] = useState([]);
  const [serieRecommendation, setSerieRecommendation] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getSerieData = async () => {
    try {
      const response = await axios.get(baseUrl + paramsSerieData, config);
      setSerieData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getSerieVideo = async () => {
    try {
      const response = await axios.get(baseUrl + paramsSerieVideo, config);
      setSerieVideo(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getSerieCredits = async () => {
    try {
      const response = await axios.get(baseUrl + paramsSerieCredits, config);
      setSerieCredits(response.data.cast);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getSerieRecommendation = async () => {
    try {
      const response = await axios.get(
        baseUrl + paramsSerieRecommendation,
        config
      );
      setSerieRecommendation(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getSerieData();
      getSerieVideo();
      getSerieCredits();
      getSerieRecommendation();
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getSerieData();
      getSerieVideo();
      getSerieCredits();
      getSerieRecommendation();
    }, 750);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SerieContent
            serieData={serieData}
            serieVideo={serieVideo}
            serieCredits={serieCredits}
          />
          <CarouselSerieRecommendation
            serieRecommendation={serieRecommendation}
          />
        </>
      )}
    </>
  );
};
