import { useState } from "react";
import NavBar from "./components/navbar";

import Hero from "./components/hero";
import Rugged from "./components/rugged";
import Features from "./components/features";
import Carousel from "./components/carousel";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Rugged />
      <Features />
      <Carousel/>
    </>
  );
}

export default App;
