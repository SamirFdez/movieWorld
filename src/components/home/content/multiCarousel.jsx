import React from "react";
import { useNavigate } from "react-router-dom";
import { CarouselRecentReleases } from "./carouselRecentReleases";
import { CarouselUpcomingReleases } from "./carouselUpcomingReleases";
import { GenresList } from "./genresList";
import "react-multi-carousel/lib/styles.css";


export const MultiCarousel = () => {
  const navigate = useNavigate();

  const goToInfoViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <CarouselRecentReleases goToInfoViewMovie={goToInfoViewMovie} />
        <CarouselUpcomingReleases goToInfoViewMovie={goToInfoViewMovie} />
        <GenresList goToInfoViewMovie={goToInfoViewMovie} />
      </div>
    </>
  );
};
