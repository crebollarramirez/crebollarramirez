import React from "react";
import Project from "./Project";
import data from "../../portfolio_data.json";
import { useLanguage } from "../LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  return (
    <div
      className="w-full flex flex-col items-center justify-start bg-dark-gray min-h-screen"
      id="projects"
    >
      {language === "EN" ? (
        <h1 className="text-4xl text-white mb-6 md:mb-6 lg:mb-12">Projects</h1>
      ) : (
        <h1 className="text-4xl text-white mb-6 md:mb-6 lg:mb-12">Proyectos</h1>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.projects[language].map((project, index) => (
          <Project
            title={project.title}
            tech={project.tech}
            details={project.details}
            githubLink={project.githubLink}
            type={project.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
