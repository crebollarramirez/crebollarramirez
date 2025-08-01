import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const emails = t("contact.emails", { returnObjects: true });

  return (
    <div
      className="h-full w-full flex flex-col items-center scroll-mt-16 md:scroll-mt-32 lg:scroll-mt-24"
      id="contact"
    >
      <h1 className="text-4xl text-white">{t("contact.title")}</h1>

      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center w-full h-full gap-4">
        <div className="bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 flex h-1/3 w-full xl:h-1/3 flex-col justify-start items-center p-4 backdrop-blur-sm">
          <h2 className="text-3xl text-beige mt-4">{t("contact.socials")}</h2>

          <div className="w-full h-full flex items-center justify-center gap-4">
            <a
              href={t("contact.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-linkedin-square text-5xl md:text-6xl no-underline text-white/85 hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
            <a
              href={t("contact.github")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-github text-5xl md:text-6xl text-white/85 hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 flex h-1/3 w-full xl:h-1/3 flex-col justify-start items-center p-4 backdrop-blur-sm">
          <h2 className="text-3xl text-beige mt-4">{t("contact.email")}</h2>
          <div className="h-full w-full flex items-center justify-center flex-col gap-2">
            {emails.map((email, i) => {
              return (
                <a
                  key={i}
                  href={`mailto:${email}`}
                  className="text-base md:text-2xl text-white/85 hover:text-beige transition-colors duration-300 break-all text-center px-2"
                >
                  {email}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
