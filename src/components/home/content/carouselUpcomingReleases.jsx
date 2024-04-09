import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const CarouselUpcomingReleases = ({ goToInfoViewMovie }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;

  const [date, setDate] = useState(null);
  const [upComingReleases, setUpComingReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getUpComingMovies = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${date}&sort_by=popularity.desc`,
        config
      );
      setUpComingReleases(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  const getDate = () => {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const getMonth = fullDate.getMonth() + 1;
    const month = getMonth > 9 ? getMonth : `0${getMonth}`;
    const getDay = fullDate.getDate();
    const day = getDay > 9 ? getDay : `0${getDay}`;

    setDate(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    if(date !== null) {
      getUpComingMovies();
    }
  }, [date]);

  return (
    <>
      {loading ? null : (
        <div style={{ marginTop: "10px" }}>
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Upcoming Releases
          </h3>
          <Carousel {...carouselOptions}>
            {upComingReleases
              ?.filter((movie) => movie.poster_path !== null)
              ?.map((upComingMovies, index) => (
                <div
                  className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-4"
                  key={`upcoming-movie-${index + 1}`}
                  onClick={() => goToInfoViewMovie(upComingMovies.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w400${upComingMovies.poster_path}`}
                    alt={upComingMovies.original_title}
                    className="rounded-lg"
                  />
                </div>
              ))}
          </Carousel>
        </div>
      )}
    </>
  );
};
