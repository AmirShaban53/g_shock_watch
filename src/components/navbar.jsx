// import { Dehaze } from "@mui/icons-material";

import { useState, useEffect } from "react";
import { Container } from "./layout";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const [navBg, setNavBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    setMobileNav(false);
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) setNavBg(true);
      if (window.scrollY < 50) setNavBg(false);
    });

    return () => {
      window.removeEventListener("scroll", () => console.log("removed"));
    };
  }, []);

  return (
    <div>
      <nav
        className={`absolute top-0 w-full transition duration-700 z-40 ${
          navBg ? `` : ``
        } ${mobileNav && "bg-zinc-950 text-black"}`}
      >
        <div className="flex justify-between items-center">
          <div className="ml-3 sm:ml-6 md:ml-12 lg:ml-28">
            <div className="flex items-center justify-between md:block">
              <a href="#home">
                <p className="text-xl md:text-3xl font-bold ">G-SHOCK</p>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {/* <Dehaze /> */}
                  menu
                </button>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 text-black">
            <ul className="h-screen md:h-auto items-center justify-center md:flex space-x-4">
              <li className="text-center p-4 hover:bg-blue-500 hover:text-white">
                <a href="#history" onClick={() => setNavbar(!navbar)}>
                  Features
                </a>
              </li>
              <li className="text-center p-4 hover:bg-blue-500 hover:text-white">
                <a href="#showcase" onClick={() => setNavbar(!navbar)}>
                  Collection
                </a>
              </li>
              <li className="text-center p-4 hover:bg-blue-500 hover:text-white">
                <a href="#process" onClick={() => setNavbar(!navbar)}>
                  Limited
                </a>
              </li>
              <li className="text-center p-4 hover:bg-blue-500 hover:text-white">
                <a href="#actors" onClick={() => setNavbar(!navbar)}>
                  Actors
                </a>
              </li>
              <li className="bg-blue-500">
                <a href="#actors" onClick={() => setNavbar(!navbar)}>
                  <img src="/shopping.png" className="h-14 p-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
