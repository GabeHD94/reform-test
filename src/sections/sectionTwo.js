import React, { useState } from 'react';
import DualPanel from "../components/shared/dualPanel";
import { ThemeProvider } from "styled-components";


const theme = {
  font: "Bebas Neue",
};

export default function SectionTwo() {
  const carStats = [
    {
      make: "PORSCHE",
      model: "2019 - 911 CARRERA S",
      mpg: " 19/24",
      hp: "443",
      zeroSixty: "3.2",
    },
    {
      make: "LAND ROVER",
      model: "2019 - RANGE ROVER VELAR",
      mpg: " 25/29",
      hp: "247",
      zeroSixty: "6.4 ",
    },
  ];



  const [currentCar, setCurrentCar] = useState(0);
  const handleAarowButton = () => {
    const nextCar = 1 ;
    if (nextCar == 1) {
        nextCar = 0
    }
    setCurrentCar(nextCar);
  }
  return (
    <ThemeProvider theme={theme}>
      <DualPanel>
          <button onClick={handleAarowButton}>fdsfdsf</button>
        <section>
          <h1>{carStats[currentCar].make}</h1>
          {/* <p>{carStats[currentCar]}</p> */}
        </section>


        <main>
            <h2>
                SELECT A VEHICLE FROM YOUR HOME.
            </h2>
            <p>
            Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.
            </p>
        </main>
      </DualPanel>
    </ThemeProvider>
  );
}
