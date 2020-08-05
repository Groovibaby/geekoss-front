import React from "react";
import "../App.css";
import Action from "./Action";
import Offers from "./Offers/Offers";
import CarouselGeekoss from "./CarouselGeekoss";

const Homepage = () => {
  return (
    <>
      <CarouselGeekoss />
      <Action />
      <Offers />
    </>
  );
};

export default Homepage;
