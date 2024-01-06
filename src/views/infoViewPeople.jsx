import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { PeopleContent } from "../components/infoViewPeople/peopleContent";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const infoViewPeople = () => {
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
            <PeopleContent />
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
