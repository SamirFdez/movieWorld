import React from "react";
import { MovieCard } from "../Cards/movieCard";

export const MoviesResults = ({ dataMovie }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap m-4 mt-1">
          {dataMovie?.map((data, index) => (
            <MovieCard data={data} key={`movie-card-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};
