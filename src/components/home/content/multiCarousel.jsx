import React from "react";
import { CarouselRecentReleases } from "./carouselRecentReleases";
import { CarouselUpcomingReleases } from "./carouselUpcomingReleases";
import { GenresList } from "./genresList";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {
  return (
    <>
      <div className="container mx-auto">
        <CarouselRecentReleases />
        <CarouselUpcomingReleases />
        <GenresList />
      </div>
    </>
  );
};
