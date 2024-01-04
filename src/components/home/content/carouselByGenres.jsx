import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const CarouselByGenres = ({ genres, goToInfoView }) => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const auth = import.meta.env.VITE_APP_AUTH;
  const params = `/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=`;

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
      const response = await axios.get(baseUrl + params + genres, config);
      setGenresMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getGenresMovies();
  }, [genres]);

  return (
    <>
      {loading ? null : (
        <Carousel {...carouselOptions}>
          {genresMovies?.map((moviesByGenre, index) => (
            <div
              className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-4"
              key={`movies-by-genre-${index + 1}`}
              onClick={() => goToInfoView(moviesByGenre.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400${moviesByGenre.poster_path}`}
                alt={moviesByGenre.original_title}
                className="rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};
