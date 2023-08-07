import { useState } from "react";
import NavBar from "./components/navbar";

import Hero from "./components/hero";
import Features from "./components/features";
import Rugged from "./components/rugged";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Rugged />
      <Features />
    </>
  );
}

export default App;
