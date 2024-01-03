import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../config/carouselOptions";

export const CarouselMovieSimilar = ({ movieSimilar }) => {
  const navigate = useNavigate();

  const goToInfoView = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="container p-5 mx-auto">
      <div className="lg:w-4/5 mx-auto">

        <Carousel {...carouselOptions}>
          {movieSimilar?.filter((movie => movie.poster_path !== null)).map((moviesSimilar, index) => (
            <div
              className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-5"
              key={`movies-by-genre-${index + 1}`}
              onClick={() => goToInfoView(moviesSimilar.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400${moviesSimilar.poster_path}`}
                alt={moviesSimilar.original_title}
                className="rounded-lg  h-60  lg:h-80 object-fill object-top"
              />
            </div>
          ))}
        </Carousel>
        </div>
      </div>
    </>
  );
};
