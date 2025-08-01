import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <div className="flex items-center justify-center w-full">
      <footer className="w-full flex justify-between items-center py-4 text-beige flex-wrap">
        <small>© 2025 Christopher Rebollar-Ramirez</small>
        {language === "EN" ? (
          <small>Powered by React.js</small>
        ) : (
          <small>Impulsado por React.js</small>
        )}
      </footer>
    </div>
  );
};

export default Footer;
