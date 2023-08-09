import { useState } from "react";
import NavBar from "./components/navbar";

import Hero from "./components/hero";
import Rugged from "./components/rugged";
import Features from "./components/features";
import Carousel from "./components/carousel";
import HolyGaril from "./components/holyGrail";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Rugged />
      <Features />
      <Carousel/>
      <HolyGaril/>
    </>
  );
}

export default App;
