import { useState, useEffect } from "react";
import { Container } from "./layout";

const Carousel = () => {
  const [active, setActive] = useState(2);
  const [items, setItems] = useState(simpleData);

  const handleChangeCard = (num) => {
    if (active < items.length) setActive((prev) => prev + num);
  };
  const handleKey = (event) => {
    if (event.key === "a" || event.key === "A") {
      handleChangeCard(-1);
    }
    if (event.key === "d" || event.key === "D") {
      handleChangeCard(1);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      // clearInterval(interval);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="h-screen">
      <div className="relative h-96 w-96 mx-auto per my-12">
        {items.map((data, index) => {
          return <Card key={index} {...data} num={index} active={active} />;
        })}
        <Card />
      </div>
    </div>
  );
};

export default Carousel;

const Card = ({ num, active, name, src }) => {
  return (
    <div
      className={`rounded-xl carousel-card bg-zinc-400/20 backdrop-blur-lg p-8
      ${active === num ? " pointer-events-auto" : "pointer-events-none"}
      ${Math.abs(active - num) >= 3 ? " opacity-0" : "opacity-100"}
      ${Math.abs(active - num) > 3 ? "hidden" : "block"}    
      `}
      style={{
        "--offset": (active - num) / 3,
        "--abs-offset": Math.abs(active - num) / 3,
        "--direction": Math.sign(active - num),
      }}
    >
      <img src={src} alt="collection image" />
      <div className="text-center my-8">
        <p className="font-bold">{name}</p>
      </div>
    </div>
  );
};

const simpleData = [
  { name: "Analog", src: "/collection/analog.webp" },
  { name: "Digital", src: "/collection/digital.webp" },
  { name: "Full Metal", src: "/collection/metal.webp" },
  { name: "Analog-Digital", src: "/collection/hybrid.webp" },
  { name: "Solar Power", src: "/collection/solar.webp" },
];
