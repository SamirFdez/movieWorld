import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const CarouselTrendingNow = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const params = ``;

  const [trendingNow, setTrendingNow] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  };

  const getTrendingNowMovies = async () => {
    try {
      const response = await axios.get(baseUrl + params, config);
      setTrendingNow(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getTrendingNowMovies();
  }, []);

  return (
    <>
      {loading ? null : (
        <div style={{ marginTop: "20px" }}>
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Trending now
          </h3>
          <Carousel {...carouselOptions}>
            {trendingNow?.map((trendingNowMovies, index) => (
              <div
                className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 mx-1 my-5"
                key={`trending-movie-${index + 1}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w400${trendingNowMovies.poster_path}`}
                  alt={trendingNowMovies.original_title}
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