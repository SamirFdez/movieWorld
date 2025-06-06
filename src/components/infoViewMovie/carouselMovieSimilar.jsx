import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { carouselOptionsEspecial } from "../../config/carouselOptionsEspecial"

export const CarouselMovieSimilar = ({ movieSimilar }) => {
  const navigate = useNavigate();

  const goToInfoViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="container p-5 mx-auto">
        <div className="lg:w-4/5 mx-auto">
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Similar Movies
          </h3>
          <Carousel {...carouselOptionsEspecial}>
            {movieSimilar
              ?.filter((movie) => movie.poster_path !== null)
              ?.map((moviesSimilar, index) => (
                <div
                  className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-4"
                  key={`movies-similar-movies-${index + 1}`}
                  onClick={() => goToInfoViewMovie(moviesSimilar.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w400${moviesSimilar.poster_path}`}
                    alt={moviesSimilar.original_title}
                    className="rounded-lg w-full h-64 object-fill"
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
