import React from "react";
import NewsCarousel from "../components/carousel/NewsCarousel";
import Sports from "../components/sportsOdds/Sports";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CountContext } from "../ContextProvider";
import Racecards from "../components/HorseRacing/Racecards";

function Home() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <NewsCarousel />
      {/* <Sports /> */}
      <Racecards />
    </div>
  );
}

export default Home;
