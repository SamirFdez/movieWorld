import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { InfoContentSerie } from "../components/infoViewSerie/infoContentSerie";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const InfoViewSerie = () => {
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
            <InfoContentSerie />
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
