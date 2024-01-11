import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeroCarousel } from "./heroCarousel";
import { HeroPlay } from "./heroPlay";

export const HeroInfo = ({
  dataMovieHero,
  dataHero,
  positionHero,
  setPositionHero,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const goToInfoViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [dataMovieHero]);

  return (
    <>
      <div className="hero min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div
          className={`container mx-auto flex flex-col lg:flex-row items-center mt-24 mb-2 lg:px-10 lg:mt-0 lg:mb-8 fade-transition ${
            showContent ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w400${dataMovieHero.poster_path}`}
            className="max-w-sm h-72 lg:h-96 shadow-2xl lg:mr-8"
            alt={dataMovieHero.title}
          />
          <div className="text-center lg:text-left mt-4 lg:mt-0 lg:px-10">
            <h1 className="text-3xl text-white font-bold lg:text-5xl">
              {dataMovieHero.title}
            </h1>
            <p className="mt-3 mb-6 px-5 lg:px-0 lg:my-6 lg:text-lg">
              {dataMovieHero.overview}
            </p>
            <button
              className="inline-flex justify-center items-center w-32 border text-white bg-blue-700 border-gray-900 transition-all duration-700 hover:border hover:bg-gray-900 hover:border-slate-300 hover:text-slate-300 rounded text-lg py-2 px-6 mr-5 fade-transition"
              onClick={() => setShow(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Play
            </button>
            <button
              className="inline-flex justify-center items-center w-40 border text-white bg-blue-700 border-gray-900 transition-all duration-700 hover:border hover:bg-gray-900 hover:border-slate-300 hover:text-slate-300 rounded text-lg py-2 px-6 fade-transition"
              onClick={() => goToInfoViewMovie(dataMovieHero.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              More Info
            </button>
          </div>
        </div>
        <HeroCarousel
          dataMovieHero={dataMovieHero}
          dataHero={dataHero}
          positionHero={positionHero}
          setPositionHero={setPositionHero}
        />
      </div>
      <HeroPlay title={dataMovieHero.title} show={show} setShow={setShow} />
    </>
  );
};
