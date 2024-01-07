import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../config/carouselOptions";

export const CarouselPeopleSerieCredits = ({ peopleSerieCredits }) => {
  const navigate = useNavigate();

  const goToInfoViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  const peopleSerieCreditsFiltered = peopleSerieCredits?.filter(
    (obj, index, array) => {
      return array.findIndex((data) => data.id === obj.id) === index;
    }
  );

  return (
    <>
      <div className="container p-5 pt-0 mx-auto">
        <div className="lg:w-4/5 mx-auto">
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Series
          </h3>
          <Carousel {...carouselOptions}>
            {peopleSerieCreditsFiltered
              ?.filter((movie) => movie.poster_path !== null)
              ?.map((seriesCredits, index) => (
                <div
                  className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-4"
                  key={`people-series-credits-${index + 1}`}
                  //   onClick={() => goToInfoViewMovie(seriesCredits.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w400${seriesCredits.poster_path}`}
                    alt={seriesCredits.original_title}
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
