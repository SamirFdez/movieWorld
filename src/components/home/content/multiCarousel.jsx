import React from "react";
import { CarouselRecentReleases } from "./carouselRecentReleases";
import { CarouselUpcomingReleases } from "./carouselUpcomingReleases";
import { CarouselGenres } from "./carouselGenres";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* <CarouselRecentReleases />
        <CarouselUpcomingReleases /> */}
        <CarouselGenres />
      </div>
    </>
  );
};
