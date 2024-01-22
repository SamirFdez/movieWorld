import React, { useState } from "react";
import { SerieContentOne } from "./serieContentOne";
import { SerieContentTwo } from "./serieContentTwo";
import { SerieContentThree } from "./serieContentThree";

export const SerieContent = ({ serieData, serieVideo, serieCredits }) => {
  const [informationView, setInformationView] = useState(0);

  return (
    <>
      <div className="container p-5 mx-auto" style={{ marginTop: "70px" }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              SERIE
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">
              {serieData.name}
            </h1>
            <div className="flex mb-4">
              <a
                className={
                  informationView === 0
                    ? "flex-grow text-center text-white border-b-2 border-white py-2 text-lg px-1 cursor-pointer"
                    : "flex-grow text-center border-b-2 border-gray-800 transition-all duration-500 hover:text-white hover:border-white py-2 text-lg px-1 cursor-pointer"
                }
                onClick={() => setInformationView(0)}
              >
                Details
              </a>
              <a
                className={
                  informationView === 1
                    ? "flex-grow text-center text-white border-b-2 border-white py-2 text-lg px-1 cursor-pointer"
                    : "flex-grow text-center border-b-2 border-gray-800 transition-all duration-500 hover:text-white hover:border-white py-2 text-lg px-1 cursor-pointer"
                }
                onClick={() => setInformationView(1)}
              >
                Preview
              </a>
              <a
                className={
                  informationView === 2
                    ? "flex-grow text-center text-white border-b-2 border-white py-2 text-lg px-1 cursor-pointer"
                    : "flex-grow text-center border-b-2 border-gray-800 transition-all duration-500 hover:text-white hover:border-white py-2 text-lg px-1 cursor-pointer"
                }
                onClick={() => setInformationView(2)}
              >
                Cast
              </a>
            </div>
            {informationView === 0 ? (
              <SerieContentOne serieData={serieData} />
            ) : informationView === 1 ? (
              <SerieContentTwo serieVideo={serieVideo} />
            ) : (
              <SerieContentThree serieCredits={serieCredits} />
            )}
          </div>
          <img
            alt={serieData.original_title}
            className={`lg:flex items-center justify-center rounded-lg w-1/3 object-fill hidden`}
            src={`https://image.tmdb.org/t/p/w400${serieData.poster_path}`}
          />
          <img
            alt={serieData.original_title}
            className="w-full h-full rounded lg:hidden"
            src={`https://image.tmdb.org/t/p/w400${serieData.backdrop_path}`}
          />
        </div>
      </div>
    </>
  );
};
