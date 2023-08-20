import React from "react";
import { Container } from "./layout";

const Features = () => {
  return (
    <div className="py-12">
      <Container>
        <div className="text-center">
          <p className="text-3xl capitalize font-bold mb-2">
            Features of a g-shock
          </p>
          <p className="text-zinc-500">
            The g-shock watches are built with features meant to last in the{" "}
            <br />
            wildest places that you can that them.
          </p>
        </div>
        <div className="grid grid-cols-6 grid-rows-4 mb-8">
          <div className="col-start-3 col-span-2 flex flex-col justify-center items-center">
            <img src="/features/water icon.png" className="w-1/6" />
            <p className="font-semibold">Water Resistance</p>
            <p className="text-zinc-400 text-sm text-center">depth of 5ATM.</p>
          </div>
          <div className="col-start-5 row-start-2 flex flex-col justify-center items-center">
            <img src="/features/shock.png" className="w-1/4" />
            <p className="font-semibold">Shock Resistance</p>
            <p className="text-zinc-400 text-sm text-center">
              withstand brutal hits.
            </p>
          </div>
          <div className="col-start-2 row-start-2 flex flex-col justify-center items-center">
            <img src="/features/battery.png" className="w-1/4" />
            <p className="font-semibold">Battery Life</p>
            <p className="text-zinc-400 text-sm text-center">min 7 years.</p>
          </div>
          <div className="col-start-5 row-start-3 flex flex-col justify-center items-center">
            <img src="/features/material.png" className="w-1/4" />
            <p className="font-semibold">Rugged Materials</p>
            <p className="text-zinc-400 text-sm text-center">
              build with rasen protection.
            </p>
          </div>
          <div className="col-start-2 row-start-3 flex flex-col justify-center items-center">
            <img src="/features/light.png" className="w-1/4" />
            <p className="font-semibold">Backlight</p>
            <p className="text-zinc-400 text-sm text-center">
              Tell time in the dark.
            </p>
          </div>
          <div className="col-start-3 row-start-4 col-span-2 flex flex-col items-center justify-center">
            <img src="/features/timer.png" className="w-1/6" />
            <p className="font-semibold">Chronograph</p>
            <p className="text-zinc-400 text-sm text-center">Time your runs.</p>
          </div>
          <div className=" col-start-3 row-start-2 col-span-2 row-span-2">
            <img src="/watches/gs4.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
