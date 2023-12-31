import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const CarouselUpcomingReleases = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const params = `/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc`;

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
      const response = await axios.get(baseUrl + params, config);
      setUpComingReleases(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);

  return (
    <>
      {loading ? null : (
        <div style={{ marginTop: "10px" }}>
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Upcoming Releases
          </h3>
          <Carousel {...carouselOptions}>
            {upComingReleases?.map((upComingMovies, index) => (
              <div
                className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 mx-1 my-5"
                key={`upcoming-movie-${index + 1}`}
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
