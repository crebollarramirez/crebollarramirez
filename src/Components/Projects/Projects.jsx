import React from "react";
import Project from "./Project";
import  projects  from "../../projects_data"; // Importing project data

const Projects = () => {


  return (
    <div className="w-full flex flex-col items-center justify-start bg-dark-gray min-h-screen" id="projects">
      <h1 className="text-4xl text-white mb-12">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
            <Project
              title={project.title}
              tech={project.tech}
              details={project.details}
              githubLink={project.githubLink}
              date={project.date}
            />
        ))}
      </div>
    </div>
  );
};

export default Projects;