import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { SeriesContent } from "../components/series/seriesCotent";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Series = () => {
  const [wordSearch, setWordSearch] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setNewSearch(wordSearch);
    }, 2000);
  }, [wordSearch]);

  return (
    <>
      <div className="App">
        <Navbar wordSearch={wordSearch} setWordSearch={setWordSearch} />

        {newSearch === "" ? (
          <>
            <SeriesContent />
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
