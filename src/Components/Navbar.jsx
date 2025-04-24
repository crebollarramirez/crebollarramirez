import React, { useState } from "react";
import scrollTo from "../utils";
import ResumeButton from "./Resume_Button/ResumeButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";

const Navbar = ({ activeSection, toggleResumeModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    scrollTo(section);
    setIsMenuOpen(false);
  };

  const getLinkClass = (section) =>
    activeSection === section
      ? "transform transition-transform duration-300 hover:-translate-y-1 text-beige"
      : "transform transition-transform duration-300 hover:-translate-y-1";

  return (
    <div className="fixed top-0 left-0 w-[100%] flex justify-center z-50">
      <nav className="w-[95%] md:w-[90%] lg:w-[70%] flex items-center justify-between px-2 md:px-6 lg:px-6 py-4 backdrop-blur-sm text-xl">
        <div className="text-white/85 mr-2 lg:mr-0 transform transition-transform duration-300 hover:-translate-y-1">
          <p
            onClick={() => handleLinkClick("welcome")}
            className="cursor-pointer"
          >
            <span className="font-bold text-beige">Christopher</span>{" "}
            Rebollar-Ramirez
          </p>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="md:hidden text-white/85 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-6 p-6 text-white/85 backdrop-blur-md">
            <li>
              <p
                className={getLinkClass("about")}
                onClick={() => handleLinkClick("about")}
              >
                {text[language].about}
              </p>
            </li>
            <li>
              <p
                className={getLinkClass("experience")}
                onClick={() => handleLinkClick("experience")}
              >
                {text[language].experience}
              </p>
            </li>
            <li>
              <p
                className={getLinkClass("projects")}
                onClick={() => handleLinkClick("projects")}
              >
                {text[language].projects}
              </p>
            </li>
            <li>
              <p
                className={getLinkClass("contact")}
                onClick={() => handleLinkClick("contact")}
              >
                {text[language].contact}
              </p>
            </li>
            <li className="pt-4">
              <div className="flex flex-col space-y-4">
                <ResumeButton
                  size="py-2 px-6 text-md"
                  onClick={toggleResumeModal}
                />
                <LanguageSwitcher size="py-2 px-6 text-md" />
              </div>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 justify-center items-center text-white/85">
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
              <ResumeButton
                size="py-2 px-12 text-md lg:text-xl"
                onClick={toggleResumeModal}
              />
              <LanguageSwitcher size="py-2 px-4 text-md lg:text-xl" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
