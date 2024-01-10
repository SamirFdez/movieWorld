import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroDesktopContent = ({
  dataMovieHero,
  genresMovie,
  openModal,
}) => {
  const navigate = useNavigate();

  const filteredGenres = genresMovie?.filter((genre) =>
    dataMovieHero?.genre_ids?.includes(genre.id)
  );

  const goToInfoViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="container mx-auto w-full hidden lg:flex md:flex-row flex-col justify-between items-center mt-24">
        <div
          className="flex lg:flex-grow md:w-1/2 flex-col md:items-start md:text-left items-center justify-center text-center"
          style={{ height: "340px" }}
        >
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-white mb-4 titleHero">
            {dataMovieHero.title}
          </h1>
          <p className="mb-4 leading-relaxed pr-16 overviewHero">
            {dataMovieHero.overview}
          </p>
          <div className="flex flex-wrap mb-5">
            {filteredGenres?.map((dataGenre) => (
              <span
                className="badge bg-transparent border-slate-300 text-slate-300 text-base p-3 my-1 mr-2"
                style={{ backdropFilter: "blur(8px)" }}
                key={dataGenre.id}
              >
                {dataGenre.name}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="inline-flex justify-center items-center w-32 border text-white bg-blue-700 border-gray-900 transition-all duration-700 hover:border hover:bg-gray-900 hover:border-slate-300 hover:text-slate-300 rounded text-lg py-2 px-6 mr-5"
              onClick={() => openModal()}
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
              className="inline-flex justify-center items-center w-40 border text-white bg-blue-700 border-gray-900 transition-all duration-700 hover:border hover:bg-gray-900 hover:border-slate-300 hover:text-slate-300 rounded text-lg py-2 px-6"
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex">
          <img
            className="object-cover object-center rounded w-full h-full"
            alt="hero"
            src={`https://image.tmdb.org/t/p/w500${dataMovieHero.backdrop_path}`}
          />
        </div>
      </div>
    </>
  );
};
