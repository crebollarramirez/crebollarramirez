import React from "react";
import scrollTo from "../utils";

const Welcome = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col" id="welcome">
      <div className="flex items-start justify-center flex-col text-left gap-6 p-2">
        <h1 className="text-white text-6xl">
          Hello I'm, <span className="text-beige">Chris</span>.
        </h1>
        <h2 className="text-3xl text-white">
          I'm a <span className="text-beige">Software Engineer</span>.
        </h2>

        {/* Button and Links */}
        <div className="flex items-center justify-center flex-row w-full h-full">
          <button
            className="w-full self-stretch border-2 border-beige text-beige transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            View More
            <i className="fa fa-arrow-down ml-2"></i>
          </button>
          <div className="flex gap-3 p-1 items-center justify-center flex-row w-1/2">
            <a
              href="https://www.linkedin.com/in/christopher-rebollar-ramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-linkedin-square text-3xl no-underline text-white hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
            <a
              href="https://github.com/crebollarramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-github text-3xl text-white hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
