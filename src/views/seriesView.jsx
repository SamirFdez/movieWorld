import React from "react";
import { Navbar } from "../components/navbar/navbar";

import { Footer } from "../components/footer/footer";

export const Series = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <div style={{ marginTop: "70px" }}>
          <h1>Series!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
            beatae iste eum a suscipit. Facilis commodi perspiciatis explicabo.
            Repudiandae aut itaque minima quod modi sit eveniet? Quibusdam, in
            sequi.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};
