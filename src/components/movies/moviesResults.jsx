import React from "react";
import { MovieCard } from "../Cards/movieCard";

export const MoviesResults = ({ dataMovie }) => {
  return (
    <>
      <div className="container mx-auto" style={{ marginTop: "70px" }}>
        <div className="flex flex-wrap m-4">
          {dataMovie?.map((data, index) => (
            <MovieCard data={data} key={`movie-card-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};
