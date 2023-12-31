import React, { useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import { HeroHome } from "../components/home/hero/heroHome";
import { MultiCarousel } from "../components/home/content/multiCarousel";
import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Home = () => {
  const [wordSearch, setWordSearch] = useState("");

  return (
    <>
      <div className="App">
        <Navbar wordSearch={wordSearch} setWordSearch={setWordSearch} />

        {wordSearch === "" ? (
          <>
            <HeroHome />
            <MultiCarousel />
          </>
        ) : (
          <SearchData wordSearch={wordSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
