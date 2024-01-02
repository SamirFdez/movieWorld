import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";

import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Series = () => {
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
            <div style={{ marginTop: "70px" }}>
              <h1>Movies!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                sequi beatae iste eum a suscipit. Facilis commodi perspiciatis
                explicabo. Repudiandae aut itaque minima quod modi sit eveniet?
                Quibusdam, in sequi.
              </p>
            </div>
          </>
        ) : (
          <SearchData newSearch={newSearch} />
        )}
        <Footer />
      </div>
    </>
  );
};
