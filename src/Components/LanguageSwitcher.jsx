import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = ({ size = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  const nextLanguage = language === "EN" ? "ES" : "EN";

  return (
    <button
      className={`text-beige hover:text-beige border-2 border-beige transform transition-transform duration-300 hover:-translate-y-1 ${size}`}
      onClick={() => toggleLanguage(nextLanguage)}
    >
      {nextLanguage}
    </button>
  );
};

export default LanguageSwitcher;