import React from "react";

export const MovieContent = ({ movieData }) => {
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
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            {movieData.genres.map((genresmovie) => (
              <span
                className="badge dark:bg-blue-700 text-white mr-2"
                key={genresmovie.id}
              >
                {genresmovie.name}
              </span>
            ))}

            <h1 className="text-white text-3xl title-font font-medium mb-4">
              {movieData.original_title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-white border-b-2 border-white-700 py-2 text-lg px-1">
                Details
              </a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                Reviews
              </a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                Details
              </a>
            </div>
            <p className="leading-relaxed mb-4">{movieData.overview}</p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Release Date</span>
              <span className="ml-auto text-white">
                {movieData.release_date}
              </span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Duration</span>
              <span className="ml-auto text-white">
                {convertDuration(movieData.runtime)}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-white">4</span>
            </div>
            {/* <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                $58.00
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div> */}
          </div>
          <img
            alt={movieData.original_title}
            className="lg:w-1/2 w-full lg:h-auto object-cover object-top rounded hidden lg:block"
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          />
          <img
            alt={movieData.original_title}
            className="lg:w-1/2 w-full lg:h-auto object-cover object-top rounded lg:hidden"
            src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
          />
        </div>
      </div>
    </>
  );
};
