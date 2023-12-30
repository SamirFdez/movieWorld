import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const CarouselRecentReleases = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const apiKey = "2a3fff17b6b526d16701df6517c4b678";
  const params = `/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&primary_release_year=2023&primary_release_date.gte=2023-12&sort_by=popularity.desc`;

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
      const response = await axios.get(baseUrl + params, config);
      setRecentReleases(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getRecentMovies();
  }, []);

  return (
    <>
      {loading ? null : (
        <div style={{ marginTop: "30px" }}>
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Recent Releases
          </h3>
          <Carousel {...carouselOptions}>
            {recentReleases?.map((recentMovies, index) => (
              <div
                className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 mx-1 my-5"
                key={`recent-movie-${index + 1}`}
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
