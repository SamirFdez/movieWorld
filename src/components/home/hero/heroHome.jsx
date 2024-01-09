import React from "react";

export const HeroHome = ({ dataMovieHero, genresMovie }) => {
  const filteredGenres = genresMovie?.filter((genre) =>
    dataMovieHero?.genre_ids?.includes(genre.id)
  );

  return (
    <>
      <div
        className="hero relative bg-cover bg-no-repeat block lg:hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w400${dataMovieHero.poster_path})`,
          marginTop: "70px",
          minHeight: "calc(70vh - 70px)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content absolute bottom-0 left-0 p-6">
          <div className="max-w-md">
            <h1 className="mb-3 text-3xl text-white font-bold">
              {dataMovieHero.title}
            </h1>
            <div className="flex flex-wrap mb-5">
              {filteredGenres?.map((dataGenre) => (
                <span
                  className="badge bg-transparent border-slate-300 text-slate-300 text-base p-3 my-1 mr-2"
                  style={{backdropFilter: "blur(8px)"}}
                  key={dataGenre.id}
                >
                  {dataGenre.name}
                </span>
              ))}
            </div>

            <button className="btn bg-gray-900 text-white hover:bg-blue-700 mr-2">
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
            <button className="btn bg-gray-900 text-white hover:bg-blue-700">
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
      </div>
    </>
  );
};
