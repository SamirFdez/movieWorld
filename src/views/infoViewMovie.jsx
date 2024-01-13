import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { InfoContentMovie } from "../components/infoViewMovie/infoContentMovie";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const InfoViewMovie = () => {
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
            <InfoContentMovie />
          </>
        ) : (
          <SearchData newSearch={newSearch} setWordSearch={setWordSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
