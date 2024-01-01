import React from "react";
import { useNavigate } from "react-router-dom";
import { CarouselRecentReleases } from "./carouselRecentReleases";
import { CarouselUpcomingReleases } from "./carouselUpcomingReleases";
import { GenresList } from "./genresList";
import "react-multi-carousel/lib/styles.css";


export const MultiCarousel = () => {
  const navigate = useNavigate();

  const goToInfoView = (id) => {
    navigate(`/resource/${id}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <CarouselRecentReleases goToInfoView={goToInfoView} />
        <CarouselUpcomingReleases goToInfoView={goToInfoView} />
        <GenresList goToInfoView={goToInfoView} />
      </div>
    </>
  );
};
