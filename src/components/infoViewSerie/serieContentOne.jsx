import React, { useState } from "react";
import dayjs from "dayjs";

export const SerieContentOne = ({ serieData }) => {
  const [readMore, setReadMore] = useState(true);

  if (!serieData || !serieData.overview) {
    return;
  }
  const overviewNotComplete = serieData.overview.slice(0, 240);
  const overviewComplete = serieData.overview;

  return (
    <>
      <p className="leading-relaxed mb-4 py-2">
        {serieData.overview !== "" ? (
          overviewComplete.length - overviewNotComplete.length > 44 ? (
            readMore ? (
              <>
                {overviewNotComplete + "... "}
                <a className="link" onClick={() => setReadMore(false)}>
                  read more
                </a>
              </>
            ) : (
              <>
                {overviewComplete + " "}
                <a className="link" onClick={() => setReadMore(true)}>
                  hide
                </a>
              </>
            )
          ) : (
            overviewComplete
          )
        ) : (
          "Overview not available."
        )}
      </p>
      <div className="flex border-t border-gray-800 py-2">
        <span className="text-gray-500">Status</span>
        <span className="ml-auto text-white">{serieData.status}</span>
      </div>
      <div className="flex border-t border-gray-800 py-2">
        <span className="text-gray-500">First Air Date</span>
        <span
          className={
            serieData?.first_air_date !== "" &&
            serieData?.first_air_date !== null
              ? "ml-auto text-white tracking-wider"
              : "ml-auto text-white"
          }
        >
          {serieData?.first_air_date !== "" &&
          serieData?.first_air_date !== null
            ? dayjs(serieData?.first_air_date).format("MMM D, YYYY")
            : "date not found"}
        </span>
      </div>
      <div className="flex border-t border-gray-800 py-2">
        <span className="text-gray-500">Last Air Date</span>
        <span
          className={
            serieData?.last_air_date !== "" && serieData?.last_air_date !== null
              ? "ml-auto text-white tracking-wider"
              : "ml-auto text-white"
          }
        >
          {serieData?.last_air_date !== "" && serieData?.last_air_date !== null
            ? dayjs(serieData?.last_air_date).format("MMM D, YYYY")
            : "date not found"}
        </span>
      </div>
      <div className="flex border-t border-gray-800 py-2">
        <span className="text-gray-500">Seasons</span>
        <span
          className={
            serieData.number_of_seasons !== ""
              ? "ml-auto text-white tracking-wider"
              : "ml-auto text-white"
          }
        >
          {serieData.number_of_seasons !== ""
            ? serieData.number_of_seasons
            : "data not found"}
        </span>
      </div>
      <div className="flex border-t border-gray-800 py-2">
        <span className="text-gray-500">Number Of Episodes</span>
        <span
          className={
            serieData.number_of_episodes !== ""
              ? "ml-auto text-white tracking-wider"
              : "ml-auto text-white"
          }
        >
          {serieData.number_of_episodes !== ""
            ? serieData.number_of_episodes
            : "data not found"}
        </span>
      </div>
      <div className="flex border-t border-b border-gray-800 py-2">
        <span className="text-gray-500">Rating</span>
        <div className=" flex justify-between items-center ml-auto">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <h4
            className={
              serieData.vote_average % 1 !== 0
                ? "text-white tracking-wider ms-1"
                : "text-white ms-1"
            }
          >
            {serieData.vote_average % 1 !== 0
              ? Math.floor(serieData.vote_average * 10) / 10 + "/10"
              : "No rating yet"}
          </h4>
        </div>
      </div>
      <div className="flex flex-wrap mt-3">
        {serieData?.genres?.map((genresSerie) => (
          <span
            className="badge dark:bg-blue-700 text-white text-base p-3 my-1 mr-2"
            key={genresSerie.id}
          >
            {genresSerie.name}
          </span>
        ))}
      </div>
    </>
  );
};
