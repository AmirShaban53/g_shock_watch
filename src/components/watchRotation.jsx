import { useState, useEffect } from "react";
import {
  WaterDrop,
  Timer,
  BatterySaver,
  FlashOff,
  ChevronRight,
} from "@mui/icons-material";

const WatchRotation = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotation = () => {
    setRotation((prev) => (prev -= 90));
  };

  const handleKey = (event) => {
    if (event.key === "a" || event.key === "A") {
      handleRotation();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // handleRotation();
    }, 6000);

    document.addEventListener("keydown", handleKey);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);
  return (
    <div
      className="w-[200%] md:w-full aspect-square top-1/2 -left-1/2 md:left-0  absolute duration-1000 transition-all rounded-full ease-in-out"
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="h-1/2 md:h-1/3 aspect-square absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 ">
        <Watch src={"/watches/gs9.png"} color={"gray"} />
      </div>
      <div className="h-1/2 md:h-1/3 aspect-square absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-0 rotate-90">
        <Watch src={"/watches/gs8.png"} color={"rgb(202, 138, 4)"} />
      </div>
      <div className="h-1/2 md:h-1/3 aspect-square absolute -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2 -rotate-180">
        <Watch src={"/watches/gs5.png"} color={"red"} />
      </div>
      <div className="h-1/2 md:h-1/3 aspect-square absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-o -rotate-90">
        <Watch src={"/watches/gs6.png"} color={"blue"} />
      </div>
    </div>
  );
};

export default WatchRotation;

const Watch = ({ src, color }) => {
  return (
    <>
      <img
        src={src}
        className="z-30 h-[80%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      />
      <div
        style={{ background: `${color}` }}
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[75%] aspect-square rounded-full  -z-10 opacity-60`}
      ></div>
      <div
        style={{ background: `${color}`, "--shadow-colored": `${color}` }}
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full aspect-square rounded-full shadow-xl shadow-black/40 -z-20 opacity-25`}
      ></div>
      <div className="absolute left-full   w-2/3">
        <div className=" p-6 rounded-xl shadow-xl bg-zinc-50/10">
          <p className="font-bold whitespace-nowrap">G-Shock GD100</p>
          <p className=" mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <button>
            Get Info <ChevronRight />
          </button>
        </div>
        <div className="my-4 flex justify-around text-xs">
          <div className="p-1 rounded-full hover:bg-blue-500 hover:text-white duration-300 transition-all">
            <WaterDrop />
          </div>
          <div className="p-1 rounded-full hover:bg-blue-500 hover:text-white duration-300 transition-all">
            <Timer />
          </div>
          <div className="p-1 rounded-full hover:bg-blue-500 hover:text-white duration-300 transition-all">
            <BatterySaver />
          </div>
          <div className="p-1 rounded-full hover:bg-blue-500 hover:text-white duration-300 transition-all">
            <FlashOff />
          </div>
        </div>
      </div>
    </>
  );
};
