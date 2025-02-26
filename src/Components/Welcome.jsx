import React from "react";
import scrollTo from "../utils";
import data from "../portfolio_data.json";
import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Welcome = () => {
  const { language } = useLanguage();

  return (
    <div
      className="h-full flex items-center justify-center flex-col"
      id="welcome"
    >
      <div className="flex items-start justify-center flex-col text-left gap-6 p-2">
        {language === "EN" ? (
          <h1 className="text-white text-6xl">
            Hello, I'm<span className="text-beige"> Chris</span>.
          </h1>
        ) : (
          <h1 className="text-white text-6xl">
            Hola, soy<span className="text-beige"> Chris</span>.
          </h1>
        )}

        {language === "EN" ? (
          <h2 className="text-3xl text-white">
            A <span className="text-beige">Full Stack Software Engineer</span>
          </h2>
        ) : (
          <h2 className="text-3xl text-white">
            Un{" "}
            <span className="text-beige">Ingeniero de Software Full Stack</span>
          </h2>
        )}

        {/* Button and Links */}
        <div className="flex items-center justify-center flex-row w-full h-full">
          <div className="flex items-center justify-center flex-row gap-2 w-full h-full">
            {" "}
            <button
              className="w-3/4 md:w-full lg:w-full self-stretch border-2 border-beige text-beige transition-transform duration-300 hover:-translate-y-1 cursor-pointer flex flex-row items-center justify-center"
              onClick={() => scrollTo("about")}
            >
              {language === "EN" ? <p>View More</p> : <p>Ver Más</p>}
              <i className="fa fa-arrow-down ml-2"></i>
            </button>
            <LanguageSwitcher size="w-1/4 h-full text-lg shown md:hidden lg:hidden " />
          </div>
          <div className="flex gap-3 p-1 items-center justify-center flex-row w-1/2">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-linkedin-square text-4xl no-underline text-white hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-github text-4xl text-white hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
