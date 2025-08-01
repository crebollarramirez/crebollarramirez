import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center w-full">
      <footer className="w-full flex justify-between items-center py-4 text-beige flex-wrap">
        <small>{t("footer.copyright")}</small>
        <small>{t("footer.poweredBy")}</small>
      </footer>
    </div>
  );
};

export default Footer;
