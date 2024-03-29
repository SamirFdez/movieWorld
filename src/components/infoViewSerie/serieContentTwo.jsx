import React from "react";

export const SerieContentTwo = ({ serieVideo }) => {
  const filterTrailer = serieVideo?.filter((video) => video.type === "Trailer");

  return (
    <>
      {serieVideo.length > 0 ? (
        <>
          {filterTrailer.length ? (
            <iframe
              className="w-full"
              height="350"
              src={`https://www.youtube.com/embed/${filterTrailer[0].key}?si=AS_0erHOhgJhvk_d`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className="w-full"
              height="250"
              src={`https://www.youtube.com/embed/${serieVideo[0].key}?si=AS_0erHOhgJhvk_d`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </>
      ) : (
        <p className="leading-relaxed mb-4 py-2">
          Video not available at the moment.
        </p>
      )}
    </>
  );
};