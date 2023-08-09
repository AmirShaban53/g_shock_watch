import React from "react";
import { Container } from "./layout";

const HolyGaril = () => {
  return (
    <div className="mb-8">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <p>G-shock milky way</p>
            <p>the holy grail of g-shock</p>
            <p>
              The successful collaboration between IFLW and The Dial Artist
              starts a new Chapter. We are happy to introduce this spectacular
              hand-painted G-Shock CasiOak Milky Way watch. Drawing inspiration
              from our Galaxy’s, this white G-Shock GA-2100-7AER is the perfect
              fit for a Milky Way iteration. This new Limited Edition uses a
              Rainbow theme across bezel and index, with a diverse splash of
              color on the dial.
            </p>
          </div>
          <div className="col-span-6 rounded-lg shadow-xl overflow-hidden">
            <img src="/milkyWay.webp" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HolyGaril;
