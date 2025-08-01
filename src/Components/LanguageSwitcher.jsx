import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ size = "" }) => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const nextLanguage = currentLanguage === "en" ? "es" : "en";
  const displayLanguage = currentLanguage === "en" ? "ES" : "EN";

  const handleLanguageChange = () => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <button
      className={`text-beige hover:text-beige border-2 border-beige transform transition-transform duration-300 hover:-translate-y-1 ${size}`}
      onClick={handleLanguageChange}
    >
      {displayLanguage}
    </button>
  );
};

export default LanguageSwitcher;
