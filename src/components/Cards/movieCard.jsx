import React from "react";
import { useNavigate } from "react-router-dom";
import NoImagenFound from "../../assets/images/imageNotFound.jpg";

export const MovieCard = ({ data }) => {
  const navigate = useNavigate();

  const goToInfoViewMovie = (id) => {
    location.href = `/movie/${id}`;
    // navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
        <div
          className="bg-gray-800 p-6 rounded-lg transition-all duration-700 hover:scale-105 cursor-pointer cardStyle"
          onClick={() => goToInfoViewMovie(data.id)}
        >
          <img
            className={
              data.poster_path !== null
                ? "h-90 rounded w-full object-cover object-top mb-6 imgCard"
                : "h-90 rounded w-full object-fill mb-6 imgCard"
            }
            src={
              data.poster_path !== null
                ? `https://image.tmdb.org/t/p/w400${data.poster_path}`
                : NoImagenFound
            }
            alt={data.title}
          />
          <div className="flex justify-between items-center">
            <h3
              className={
                data.release_date !== ""
                  ? "tracking-widest text-sm font-medium title-font"
                  : "text-sm font-medium title-font"
              }
            >
              {data.release_date !== "" ? data.release_date : "date not found"}
            </h3>
            <div className="flex items-center">
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
                  data.vote_average % 1 !== 0
                    ? "tracking-widest text-sm font-medium title-font ms-1"
                    : "text-sm font-medium title-font ms-1"
                }
              >
                {data.vote_average % 1 !== 0
                  ? Math.floor(data.vote_average * 10) / 10 + "/10"
                  : "No rating yet"}
              </h4>
            </div>
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-4 titleCard">
            {data.title}
          </h2>
          <p className="leading-relaxed text-pretty text-base overviewCard">
            {data.overview !== "" ? data.overview : "Overview not available"}
          </p>
        </div>
      </div>
    </>
  );
};
