import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { MoviesContent } from "../components/movies/moviesContent";

import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Movies = () => {
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
            <MoviesContent />
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
