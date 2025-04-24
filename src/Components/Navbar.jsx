import React from "react";
import scrollTo from "../utils";
import ResumeButton from "./Resume_Button/ResumeButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";

const Navbar = ({ activeSection, toggleResumeModal }) => {
  const { language } = useLanguage();
  const text = {
    EN: {
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    ES: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
  };

  const getLinkClass = (section) =>
    activeSection === section
      ? "transform transition-transform duration-300 hover:-translate-y-1 text-beige"
      : "transform transition-transform duration-300 hover:-translate-y-1";

  return (
    <div className="fixed top-0 left-0 w-[100%] flex justify-center z-50 hidden md:flex">
      <nav className="w-[95%] md:w-[90%] lg:w-[70%] flex items-center justify-between px-6 py-4 backdrop-blur-sm text-xl">
        <div className="text-white/85 mr-2 lg:mr-0 transform transition-transform duration-300 hover:-translate-y-1">
          <p onClick={() => scrollTo("welcome")} className="cursor-pointer">
            <span className="font-bold text-beige">Christopher</span>{" "}
            Rebollar-Ramirez
          </p>
        </div>
        <ul className="flex space-x-4 justify-center items-center text-white/85">
          <li>
            <p
              className={getLinkClass("about")}
              onClick={() => scrollTo("about")}
            >
              {text[language].about}
            </p>
          </li>
          <li>
            <p
              className={getLinkClass("experience")}
              onClick={() => scrollTo("experience")}
            >
              {text[language].experience}
            </p>
          </li>
          <li>
            <p
              className={getLinkClass("projects")}
              onClick={() => scrollTo("projects")}
            >
              {text[language].projects}
            </p>
          </li>
          <li>
            <p
              className={getLinkClass("contact")}
              onClick={() => scrollTo("contact")}
            >
              {text[language].contact}
            </p>
          </li>

          <li>
            <div className="flex items-center justify-center gap-2">
              <ResumeButton size="py-2 px-12 text-md lg:text-xl" onClick={toggleResumeModal} />
              <LanguageSwitcher size="py-2 px-4 text-md lg:text-xl" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;