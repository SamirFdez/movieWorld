import React from "react";
import { Navbar } from "../components/navbar/navbar";
import { HeroHome } from "../components/home/hero/heroHome";
import { MultiCarousel } from "../components/home/content/multiCarousel";
import { Footer } from "../components/footer/footer";

export const Home = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroHome />
        <MultiCarousel />
        <Footer />
      </div>
    </>
  );
};
