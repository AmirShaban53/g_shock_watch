import { useState, useEffect } from "react";
import WatchRotation from "./watchRotation";
import { Container } from "./layout";

const Hero = () => {
  return (
    <div className="h-screen justify-center items-center gap-12 relative overflow-hidden">
      <div className="absolute w-1/2 aspect-square rounded-full bg-[#79bcff6b] filter blur-3xl mix-blend-screen animate-blob-1 top-[45%] left-[10%]"></div>
      <div className="absolute w-1/2 aspect-square rounded-full bg-[#fe915676] filter blur-3xl mix-blend-screen animate-blob-2 top-[0%] left-[45%]"></div>
      <WatchRotation />
      <Container>
        <div className="flex flex-col justify-center w-2/5 h-screen gap-8">
          <div className="font-bold uppercase">
            <p className="text-3xl">It's not just a watch</p>
            <p className="text-7xl">It's Gear</p>
          </div>
          <div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores molestiae velit quae enim aperiam ipsa.
            </p>
          </div>
          <div>
            <button type="button" className="border-2 text-lg p-4 py-2">Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
