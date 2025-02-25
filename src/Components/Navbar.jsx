import React from "react";
import scrollTo from "../utils";

const Navbar = () => {
  return (
    <nav className="h-[5%] w-full  items-center justify-between p-4 backdrop-blur-sm lg:text-xl text-sm hidden md:flex lg:flex mt-1">
      <div className="text-white/85 mr-2 lg:mr-0">
        <p onClick={() => scrollTo("welcome")} className="cursor-pointer">
          <span className="font-bold text-beige">Christopher</span>{" "}
          Rebollar-Ramirez
        </p>
      </div>
      <ul className="flex space-x-4 justify-center items-center text-white/85">
        <li>
          <p
            className="hover:text-beige transition-colors duration-300 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            About
          </p>
        </li>
        <li>
          <p
            className="hover:text-beige transition-colors duration-300 cursor-pointer"
            onClick={() => scrollTo("experience")}
          >
            Experience
          </p>
        </li>
        <li>
          <p
            className="hover:text-beige transition-colors duration-300 cursor-pointer"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </p>
        </li>
        <li>
          <p
            className="hover:text-beige transition-colors duration-300 cursor-pointer"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </p>
        </li>
        <li>
          <button className="text-beige hover:text-beige border-2 border-beige px-8 lg:px-12 md:py-[0.3em] lg:py-1 transform transition-transform duration-300 hover:-translate-y-1">
            CV
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
