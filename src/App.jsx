import { useState } from "react";
import NavBar from "./components/navbar";

import Hero from "./components/hero";
import Features from "./components/features";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features/>
    </>
  );
}

export default App;
