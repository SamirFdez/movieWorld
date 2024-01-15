import React from "react";
import { MovieCard } from "../Cards/movieCard";
import { SerieCard } from "../Cards/serieCard";
import { PeopleCard } from "../Cards/peopleCard";
import { NoDataFound } from "./noDataFound";

export const SearchDataContent = ({
  tabActive,
  dataSearched,
  setWordSearch,
}) => {
  const movieData = dataSearched?.filter((data) => data.media_type === "movie");
  const serieData = dataSearched?.filter((data) => data.media_type === "tv");
  const personData = dataSearched?.filter(
    (data) => data.media_type === "person"
  );

  return (
    <>
      <div className="flex flex-wrap m-4">
        {tabActive === 0 ? (
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
            {personData.length
              ? personData.map((data, index) => (
                  <PeopleCard data={data} key={`people-card-${index}`} />
                ))
              : null}
          </>
        ) : tabActive === 1 ? (
          <>
            {movieData.length ? (
              movieData.map((data, index) => (
                <MovieCard data={data} key={`movie-card-${index}`} />
              ))
            ) : (
              <NoDataFound />
            )}
          </>
        ) : tabActive === 2 ? (
          <>
            {serieData.length ? (
              serieData.map((data, index) => (
                <SerieCard data={data} key={`serie-card-${index}`} />
              ))
            ) : (
              <NoDataFound />
            )}
          </>
        ) : (
          <>
            {personData.length ? (
              personData.map((data, index) => (
                <PeopleCard data={data} key={`people-card-${index}`} />
              ))
            ) : (
              <NoDataFound />
            )}
          </>
        )}
      </div>
    </>
  );
};
