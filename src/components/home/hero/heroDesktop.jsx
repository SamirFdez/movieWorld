import React, { useState } from "react";
import { HeroDesktopContent } from "./heroDesktopContent";
import { HeroDesktopCarousel } from "./heroDesktopCarousel";
import { HeroPlay } from "./heroPlay";

export const HeroDesktop = ({
  dataMovieHero,
  genresMovie,
  dataHero,
  positionHero,
  setPositionHero,
}) => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);

  return (
    <>
      <HeroDesktopContent
        dataMovieHero={dataMovieHero}
        genresMovie={genresMovie}
        openModal={openModal}
      />

      <HeroDesktopCarousel
        dataHero={dataHero}
        positionHero={positionHero}
        setPositionHero={setPositionHero}
      />
      <HeroPlay show={show} setShow={setShow} />
    </>
  );
};
