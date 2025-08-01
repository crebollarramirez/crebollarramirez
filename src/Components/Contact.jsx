import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const emails = t("contact.emails", { returnObjects: true });

  return (
    <div
      className="w-full min-h-full flex flex-col items-center justify-center"
      id="contact"
    >
      <h1 className="text-4xl text-white text-center mb-8">
        {t("contact.title")}
      </h1>

      <div className="container px-4 flex flex-col md:flex-row items-center justify-center flex-1 gap-4">
        <div className="h-[12em] md:h-[24em] w-full md:w-1/2 lg:w-1/2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center p-4 backdrop-blur-sm">
          <h2 className="text-3xl text-beige mb-4">{t("contact.socials")}</h2>

          <div className="w-full flex-1 flex items-center justify-center gap-4">
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

        <div className="h-[12em] md:h-[24em] w-full md:w-1/2 lg:w-1/2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center p-4 backdrop-blur-sm">
          <h2 className="text-3xl text-beige mb-4">{t("contact.email")}</h2>
          <div className="flex-1 w-full flex items-center justify-center flex-col gap-2">
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
