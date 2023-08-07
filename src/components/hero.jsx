import { useState, useEffect } from "react";
import WatchRotation from "./watchRotation";
import { Container } from "./layout";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-100 justify-center items-center gap-12 relative overflow-hidden">
      <WatchRotation />
      <Container>
        <div className="flex flex-col justify-center w-2/5 text-white h-screen gap-8">
          <div className="">
            <p className="font-bold text-amber-400 text-lg">G-shock</p>
          </div>
          <div className="font-bold uppercase text-zinc-700">
            <p className="text-4xl">It's not just a watch</p>
            <p className="text-7xl">It's Gear</p>
          </div>
          <div>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores molestiae velit quae enim aperiam ipsa.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
