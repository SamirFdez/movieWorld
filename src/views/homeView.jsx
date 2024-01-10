import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import { HeroSliders } from "../components/home/hero/heroSlider";
// import { HeroContent } from "../components/home/hero/heroContent";
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
            <HeroSliders />
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
