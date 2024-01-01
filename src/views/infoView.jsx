import React, { useState } from "react";
import { Navbar } from "../components/navbar/navbar";

import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const InfoView = () => {
  const [wordSearch, setWordSearch] = useState("");

  return (
    <>
      <div className="App">
        <Navbar wordSearch={wordSearch} setWordSearch={setWordSearch} />

        {wordSearch === "" ? (
          <>
            <div style={{ marginTop: "70px" }}>
              <h1>HOLA MI AMORR</h1>
            </div>
          </>
        ) : (
          <SearchData wordSearch={wordSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
