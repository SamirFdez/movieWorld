import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PeopleContent } from "./peopleContent";
import { CarouselPeopleMovieCredits } from "./carouselPeopleMovieCredits";
import { CarouselPeopleSerieCredits } from "./carouselPeopleSerieCredits";
import { Loading } from "../utils/loading";

export const InfoPeopleContent = () => {
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const paramsPeopleData = `/person/${id}?language=en-US`;
  const paramsPeopleMovieCredits = `/person/${id}/movie_credits?language=en-US`;
  const paramsPeopleSerieCredits = `/person/${id}/tv_credits?language=en-US`;

  const [peopleData, setPeopleData] = useState({});
  const [peopleMovieCredits, setPeopleMovieCredits] = useState([]);
  const [peopleSerieCredits, setPeopleSerieCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getPeopleData = async () => {
    try {
      const response = await axios.get(baseUrl + paramsPeopleData, config);
      setPeopleData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };
  const getPeopleMovieCredits = async () => {
    try {
      const response = await axios.get(
        baseUrl + paramsPeopleMovieCredits,
        config
      );
      setPeopleMovieCredits(response.data.cast);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getPeopleSerieCredits = async () => {
    try {
      const response = await axios.get(
        baseUrl + paramsPeopleSerieCredits,
        config
      );
      setPeopleSerieCredits(response.data.cast);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getPeopleData();
      getPeopleMovieCredits();
      getPeopleSerieCredits();
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getPeopleData();
      getPeopleMovieCredits();
      getPeopleSerieCredits();
    }, 750);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PeopleContent peopleData={peopleData} />
          {peopleMovieCredits?.length > 0 ? (
            <CarouselPeopleMovieCredits
              peopleMovieCredits={peopleMovieCredits}
            />
          ) : null}
          {peopleSerieCredits?.length > 0 ? (
            <CarouselPeopleSerieCredits
              peopleSerieCredits={peopleSerieCredits}
            />
          ) : null}
        </>
      )}
    </>
  );
};
