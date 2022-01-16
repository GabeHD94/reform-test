import React, { useState } from "react";
import DualPanelThree from "../components/shared/dualPanelThree";
import PorscheFront from "../assests/porsche-front.png"
import { ThemeProvider } from "styled-components";


const theme = {
  font: "Bebas Neue",
};

export default function SectionFour() {

  return (
    <ThemeProvider theme={theme}>
      <DualPanelThree>
        {/* <button onClick={handleAarowButton}>fdsfdsf</button> */}
        <section>
            <img src={PorscheFront}>
            </img>
        </section>

        <main>
          <h2>TRADE IN YOUR CAR EVERY MONTH.</h2>
          <p>
          Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!
          </p>
        </main>
      </DualPanelThree>
    </ThemeProvider>
  );
}
