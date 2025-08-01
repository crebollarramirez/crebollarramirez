import Me from "../assets/meSpain.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const skillsData = t("about.skillsData", { returnObjects: true });

  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center scroll-mt-16 md:scroll-mt-32 lg:scroll-mt-24"
    >
      <h1 className="text-4xl text-white mb-4 md:mt-0 md:mb-0 lg:mb-0 lg:mt-0">
        {t("about.title")}
      </h1>
      <div className="lg:mt-0 flex items-center justify-center flex-col gap-4 min-h-screen">
        <div className="flex items-center justify-center gap-4 md:gap-4 lg:gap-10 flex-col md:flex-row lg:flex-row">
          {/* Me and Greeting */}
          <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[50%] lg:w-[35%]">
            <div className="w-full flex justify-center items-center">
              <div className="hexagon w-[75%] lg:w-[85%] ">
                <img src={Me} alt="Person Icon" />
              </div>
            </div>

            {/* Greeting Text Column */}
            <div className="flex flex-col items-center justify-center gap-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm p-4">
              <h2 className="text-3xl text-white/85">{t("about.hello")}</h2>

              <p
                className="text-white/85 text-xl text-left"
                dangerouslySetInnerHTML={{ __html: t("about.introduction") }}
              />
            </div>
          </div>

          {/*Skills and stuff*/}
          <div className="flex flex-col justify-center items-center text-white w-full md:w-[50%] lg:w-[65%] bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm p-4">
            <h2 className="text-3xl text-white/85">{t("about.skills")}</h2>

            <div className="flex flex-col text-left gap-4 shadow text-beige text-2xl font-semibold">
              <h3>{t("about.languages")}</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {skillsData.languages.map((link, index) => (
                  <img
                    key={index}
                    src={link}
                    alt="tech-icon"
                    className="h-[1.4em]"
                  />
                ))}
              </div>
              <h3>{t("about.technology")}</h3>

              <div className="flex flex-wrap gap-1 mb-2">
                {skillsData.tech.map((link, index) => (
                  <img
                    key={index}
                    src={link}
                    alt="tech-icon"
                    className="h-[1.4em]"
                  />
                ))}
              </div>

              <h3>{t("about.machineLearning")}</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {skillsData.machineLearning.map((link, index) => (
                  <img
                    key={index}
                    src={link}
                    alt="tech-icon"
                    className="h-[1.4em]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
