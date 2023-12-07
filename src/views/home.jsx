import React from "react";
import { HeroHome } from "../components/home/hero/heroHome";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

export const Home = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroHome />
        <Footer />
      </div>
    </>
  );
};
