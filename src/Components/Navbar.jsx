import { useState } from "react";
import scrollTo from "../utils";
import ResumeButton from "./Resume_Button/ResumeButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = ({ activeSection, toggleResumeModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    scrollTo(section);
    setIsMenuOpen(false);
  };

  const getLinkClass = (section) =>
    activeSection === section
      ? "transform transition-transform duration-300 hover:-translate-y-1 text-beige cursor-pointer"
      : "transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer";

  return (
    <div className="w-full flex justify-center z-50 backdrop-blur-sm relative">
      <nav className="container flex items-center justify-between px-2 md:px-6 lg:px-6 py-4 text-xl">
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
          className={`md:hidden absolute inset-x-0 top-full z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-[-100%] opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-6 p-6 text-white/85 bg-black/80 backdrop-blur-sm border-b border-white/10">
            <li>
              <p
                className={getLinkClass("about")}
                onClick={() => handleLinkClick("about")}
              >
                {t("navbar.about")}
              </p>
            </li>
            <li>
              <p
                className={getLinkClass("experience")}
                onClick={() => handleLinkClick("experience")}
              >
                {t("navbar.experience")}
              </p>
            </li>
            <li>
              <p
                className={getLinkClass("projects")}
                onClick={() => handleLinkClick("projects")}
              >
                {t("navbar.projects")}
              </p>
            </li>
            <li>
              <p
                className={getLinkClass("contact")}
                onClick={() => handleLinkClick("contact")}
              >
                {t("navbar.contact")}
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
              {t("navbar.about")}
            </p>
          </li>
          <li>
            <p
              className={getLinkClass("experience")}
              onClick={() => scrollTo("experience")}
            >
              {t("navbar.experience")}
            </p>
          </li>
          <li>
            <p
              className={getLinkClass("projects")}
              onClick={() => scrollTo("projects")}
            >
              {t("navbar.projects")}
            </p>
          </li>
          <li>
            <p
              className={getLinkClass("contact")}
              onClick={() => scrollTo("contact")}
            >
              {t("navbar.contact")}
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
