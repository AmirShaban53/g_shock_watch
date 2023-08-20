import { useState } from "react";
import NavBar from "./components/navbar";

import Hero from "./components/hero";
import Rugged from "./components/rugged";
import Features from "./components/features";
import Carousel from "./components/carousel";
import HolyGaril from "./components/holyGrail";
import CallToAction from "./components/cta";

function App() {
  return (
    <div className="text-white bg-zinc-800">
      <NavBar />
      <Hero />
      <Rugged />
      <Features />
      <Carousel/>
      <HolyGaril/>
      <CallToAction/>
    </div>
  );
}

export default App;
