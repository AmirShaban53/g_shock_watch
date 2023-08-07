import React from "react";
import { Container } from "./layout";

const Rugged = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-5 rounded-xl overflow-hidden">
            <video
              muted
              autoPlay
              loop
              src="/videos/gshock.mp4"
              className="h-full object-contain"
            />
          </div>
          <div className="col-span-7">
            <p className="font-bold text-4xl capitalize mb-4">
              What it means to be rugged.
            </p>
            <p className="text-zinc-800 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt reiciendis sapiente tempore in, quisquam expedita commodi tempora perspiciatis maiores nobis cum, eligendi suscipit voluptatibus. Odio architecto enim reiciendis perferendis unde tenetur libero, asperiores, voluptatum consectetur aliquid rem id molestias modi, quod quos. Animi recusandae quisquam similique, et obcaecati a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum non nulla laborum, modi facere, quidem earum distinctio, ipsam est quasi placeat? Natus culpa eos velit dolor, ea dolorum deleniti, ullam mollitia amet, hic dignissimos esse similique! Dolorem corrupti voluptas dolorum eius velit sunt ipsum, aut et porro neque illo?</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rugged;
