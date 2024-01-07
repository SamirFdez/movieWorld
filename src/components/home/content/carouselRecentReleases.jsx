import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";
import { Loading } from "../../utils/loading";

export const CarouselRecentReleases = ({ goToInfoViewMovie }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;

  const [date, setDate] = useState("2024");
  const [recentReleases, setRecentReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getRecentMovies = async () => {
    try {
      const response = await axios.get(
        baseUrl +
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.lte=${date}&sort_by=popularity.desc`,
        config
      );
      setRecentReleases(response.data.results);
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
    getRecentMovies();
  }, [date]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Recent Releases
          </h3>
          <Carousel {...carouselOptions}>
            {recentReleases?.map((recentMovies, index) => (
              <div
                className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-4"
                key={`recent-movie-${index + 1}`}
                onClick={() => goToInfoViewMovie(recentMovies.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w400${recentMovies.poster_path}`}
                  alt={recentMovies.original_title}
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
