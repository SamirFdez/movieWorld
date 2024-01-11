import React from "react";
import { MovieCard } from "../Cards/movieCard";
import { SerieCard } from "../Cards/serieCard";

export const SearchDataContent = ({ dataSearched }) => {
  const movieData = dataSearched?.filter((data) => data.media_type === "movie");
  const serieData = dataSearched?.filter((data) => data.media_type === "tv");
  const personData = dataSearched?.filter(
    (data) => data.media_type === "person"
  );

  return (
    <>
      {movieData.length
        ? movieData.map((data, index) => (
            <MovieCard data={data} key={`movie-card-${index}`} />
          ))
        : null}
      {serieData.length
        ? serieData.map((data, index) => (
            <SerieCard data={data} key={`serie-card-${index}`} />
          ))
        : null}
    </>
  );
};
