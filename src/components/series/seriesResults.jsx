import React from "react";
import { SerieCard } from "../Cards/serieCard";

export const SeriesResults = ({ dataSerie }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap m-4">
          {dataSerie?.map((data, index) => (
            <SerieCard data={data} key={`serie-card-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};
