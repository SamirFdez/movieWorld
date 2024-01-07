import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { InfoPeopleContent } from "../components/infoViewPeople/infoPeopleContent";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const InfoViewPeople = () => {
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
            <InfoPeopleContent />
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
