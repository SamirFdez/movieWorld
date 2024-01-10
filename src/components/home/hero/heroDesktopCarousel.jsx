import React from "react";
import Carousel from "react-multi-carousel";
import { carouselOptions } from "../../../config/carouselOptions";

export const HeroDesktopCarousel = ({
  dataHero,
  positionHero,
  setPositionHero,
}) => {
  return (
    <>
      <div className="container mx-auto">
        <Carousel {...carouselOptions}>
          {dataHero?.map((trendingMovies, index) => (
            <div
              className={`transition-all duration-500 hover:scale-105 cursor-pointer mx-2 my-4 ${
                positionHero === index
                  ? "scale-105 border border-slate-300"
                  : null
              }`}
              key={`trending-movie-${index + 1}`}
              onClick={() => setPositionHero(index)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400${trendingMovies.poster_path}`}
                alt={trendingMovies.original_title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
