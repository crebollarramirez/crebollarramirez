import Project from "./Project";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projectsData = t("projects.items", { returnObjects: true });

  return (
    <div
      className="w-full min-h-full flex flex-col items-center justify-start"
      id="projects"
    >
      <h1 className="text-4xl text-white mb-6 md:mb-6 lg:mb-12">
        {t("projects.title")}
      </h1>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <Project
            key={index}
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
