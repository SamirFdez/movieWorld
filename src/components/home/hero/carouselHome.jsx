import React from "react";
import Carousel from "react-multi-carousel";
import { carouselHomeOptions } from "../../../config/carouselHomeOptions";

export const CarouselHome = ({ dataHero, positionHero, setPositionHero }) => {
  return (
    <>
      <Carousel {...carouselHomeOptions}>
        {dataHero?.map((trending, index) => (
          <div
            className={`cursor-pointer mx-1 my-2 ${
              positionHero === index
                ? "transition-all duration-700 scale-105 border border-slate-300"
                : null
            }`}
            key={`recent-movie-${index + 1}`}
            onClick={() => setPositionHero(index)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w400${trending.poster_path}`}
              alt={trending.original_title}
              className="w-auto"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
