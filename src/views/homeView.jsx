import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { HeroHome } from "../components/home/hero/heroHome";
import { MultiCarousel } from "../components/home/content/multiCarousel";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Home = () => {
  const [wordSearch, setWordSearch] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setNewSearch(wordSearch);
    }, 1000);
  }, [wordSearch]);

  return (
    <>
      <div className="App">
        <Navbar wordSearch={wordSearch} setWordSearch={setWordSearch} />

        {newSearch === "" ? (
          <>
            <HeroHome />
            <MultiCarousel />
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
