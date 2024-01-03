import React from "react";

export const MovieContentTwo = ({ movieVideo }) => {
  const filterTrailer = movieVideo?.filter((video) => video.type === "Trailer");
  console.log(filterTrailer);

  return (
    <>
      {movieVideo.length > 0 ? (
        <>
          {filterTrailer.length ? (
            <iframe
              className="w-full"
              height="250"
              src={`https://www.youtube.com/embed/UGc5Tzz19UY?si=AS_0erHOhgJhvk_d`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : null}
        </>
      ) : (
        <p className="leading-relaxed mb-4 py-2">
          Video not available at the moment
        </p>
      )}
    </>
  );
};
