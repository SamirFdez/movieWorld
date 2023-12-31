import React, { useState } from "react";
import { Navbar } from "../components/navbar/navbar";

import { SearchData } from "../components/searchData/searchData";
import { Footer } from "../components/footer/footer";

export const Series = () => {
  const [wordSearch, setWordSearch] = useState("");

  return (
    <>
      <div className="App">
        <Navbar wordSearch={wordSearch} setWordSearch={setWordSearch} />

        {wordSearch === "" ? (
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
          <SearchData wordSearch={wordSearch} />
        )}

        <Footer />
      </div>
    </>
  );
};
