import React, { useState } from "react";
import { MovieContentOne } from "./movieContentOne";
import { MovieContentTwo } from "./movieContentTwo";
import { MovieContentThree } from "./movieContentThree";

export const MovieContent = ({ movieData, movieVideo, movieCredits }) => {
  const [informationView, setInformationView] = useState(0);

  const convertDuration = (duration) => {
    const horas = Math.floor(duration / 60);
    const minutos = duration % 60;

    let totalDuration = "";
    if (horas > 0) {
      totalDuration += `${horas}h `;
    }
    if (minutos > 0 || horas === 0) {
      totalDuration += `${minutos}min`;
    }
    return totalDuration;
  };
 
  return (
    <>
      <div className="container p-5 mx-auto" style={{ marginTop: "70px" }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-start">
          <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              MOVIE
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">
              {movieData.title}
            </h1>
            <div className="flex mb-4">
              <a
                className={
                  informationView === 0
                    ? "flex-grow text-white border-b-2 border-white py-2 text-lg px-1 cursor-pointer"
                    : "flex-grow border-b-2 border-gray-800 transition-all duration-500 hover:text-white hover:border-white py-2 text-lg px-1 cursor-pointer"
                }
                onClick={() => setInformationView(0)}
              >
                Details
              </a>
              <a
                className={
                  informationView === 1
                    ? "flex-grow text-white border-b-2 border-white py-2 text-lg px-1 cursor-pointer"
                    : "flex-grow border-b-2 border-gray-800 transition-all duration-500 hover:text-white hover:border-white py-2 text-lg px-1 cursor-pointer"
                }
                onClick={() => setInformationView(1)}
              >
                Preview
              </a>
              <a
                className={
                  informationView === 2
                    ? "flex-grow text-white border-b-2 border-white py-2 text-lg px-1 cursor-pointer"
                    : "flex-grow border-b-2 border-gray-800 transition-all duration-500 hover:text-white hover:border-white py-2 text-lg px-1 cursor-pointer"
                }
                onClick={() => setInformationView(2)}
              >
                Cast
              </a>
            </div>
            {informationView === 0 ? (
              <MovieContentOne
                movieData={movieData}
                convertDuration={convertDuration}
              />
            ) : informationView === 1 ? (
              <MovieContentTwo movieVideo={movieVideo} />
            ) : (
              <MovieContentThree movieCredits={movieCredits} />
            )}
          </div>
          <img
            alt={movieData.original_title}
            className="lg:w-1/3 w-full lg:h-4/5 rounded hidden lg:flex items-center justify-center"
            src={`https://image.tmdb.org/t/p/w400${movieData.poster_path}`}
          />
          <img
            alt={movieData.original_title}
            className="w-full h-full rounded lg:hidden"
            src={`https://image.tmdb.org/t/p/w400${movieData.backdrop_path}`}
          />
        </div>
      </div>
    </>
  );
};
