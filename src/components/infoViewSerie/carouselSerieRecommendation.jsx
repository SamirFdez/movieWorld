import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../config/carouselOptions";

export const CarouselSerieRecommendation = ({ serieRecommendation }) => {
  const navigate = useNavigate();

  const goToInfoViewSerie = (id) => {
    navigate(`/serie/${id}`);
  };

  return (
    <>
      <div className="container p-5 mx-auto">
        <div className="lg:w-4/5 mx-auto">
          <h3 className="text-3xl font-bold dark:text-white tracking-wider">
            Similar Series
          </h3>
          <Carousel {...carouselOptions}>
            {serieRecommendation
              ?.filter((serie) => serie.poster_path !== null)
              ?.map((serieReco, index) => (
                <div
                  className="shadow-md shadow-gray-800 transition-all duration-700 hover:scale-105 cursor-pointer mx-1 my-4"
                  key={`series-similar-series-${index + 1}`}
                  onClick={() => goToInfoViewSerie(serieReco.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w400${serieReco.poster_path}`}
                    alt={serieReco.name}
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
