import { useTranslation } from "react-i18next";
import LinkIcon from "./LinkIcon";

const Experience = () => {
  const { t } = useTranslation();
  const experienceData = t("experience.jobs", { returnObjects: true });

  return (
    <div
      className="w-full min-h-full flex flex-col items-center justify-start"
      id="experience"
    >
      <h1 className="text-4xl text-white mb-6 md:mb-6 lg:mb-12">
        {t("experience.title")}
      </h1>

      <div className="container mx-auto px-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="mb-8 flex w-full relative">
            {/* Timeline line */}
            <div className="flex flex-col items-center mr-6 relative">
              <div className="w-4 h-4 rounded-full bg-beige z-10 relative"></div>
              {index !== experienceData.length - 1 && (
                <div
                  className="w-0.5 bg-beige/30 absolute top-4 left-1/2 transform -translate-x-1/2"
                  style={{ height: "calc(100% + 2rem)" }}
                ></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-beige text-xl font-semibold">
                    {exp.title}
                  </h3>
                  <LinkIcon link={exp.link} />
                </div>
                <h4 className="text-white/80 font-medium mt-1">
                  {exp.company}
                </h4>
                <p className="text-white/60 text-sm mt-1">{exp.period}</p>

                {Array.isArray(exp.description) ? (
                  <ul className="text-white/70 mt-3 list-disc ml-4">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/70 mt-3">{exp.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
