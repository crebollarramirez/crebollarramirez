import React from "react";
import data from "../portfolio_data.json";
import { useLanguage } from "./LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  return (
    <div
      className="w-full flex flex-col items-center justify-start min-h-screen scroll-mt-16 md:scroll-mt-32 lg:scroll-mt-24"
      id="experience"
    >
      {language === "EN" ? (
        <h1 className="text-4xl text-white mb-6 md:mb-6 lg:mb-12">
          Experience
        </h1>
      ) : (
        <h1 className="text-4xl text-white mb-6 md:mb-6 lg:mb-12">
          Experiencia
        </h1>
      )}

      <div className="w-full lg:w-[60%]">
        {data.experience[language].map((exp, index) => (
          <div key={index} className="mb-8 flex w-full">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-beige"></div>
              {index !== data.experience[language].length - 1 && (
                <div className="w-0.5 h-full bg-beige/30"></div>
              )}
            </div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-beige text-xl font-semibold">
                  {exp.title}
                </h3>
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
