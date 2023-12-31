import React, { useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import { MoviesContent } from "../components/movies/moviesContent";

import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Movies = () => {
  const [wordSearch, setWordSearch] = useState("");

  return (
    <>
      <div className="App">
        <Navbar wordSearch={wordSearch} setWordSearch={setWordSearch} />

        {wordSearch === "" ? (
          <>
            <MoviesContent />
          </>
        ) : (
          <SearchData wordSearch={wordSearch} />
        )}

        <Footer />
      </div>
    </>
  );
};
