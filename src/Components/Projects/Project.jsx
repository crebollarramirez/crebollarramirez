import React from "react";

const Project = ({ title, tech, details, githubLink, type }) => {
  return (
    <div className="flex flex-col items-center justify-start p-6 shadow gap-4 w-full h-full bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
      <div className="flex items-center justify-start flex-col gap-1 w-full">
        <h1 className="text-3xl font-semibold text-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-beige"
          >
            {title} <i className="fa fa-github text-3xl"></i>
          </a>
        </h1>
        <h3 className="text-base text-white/60">{type}</h3>
      </div>

      {/* Render details as a list if it's an array */}
      <div className="flex flex-col text-left flex-wrap text-white/70 ml-4">
        <ul className="list-disc">
          {Array.isArray(details) ? (
            details.map((detail, index) => <li key={index}>{detail}</li>)
          ) : (
            <li>{details}</li> // If it's a single string, render it as a list item
          )}
        </ul>
      </div>

      {/* Display tech links dynamically */}
      <div className="flex items-center justify-center flex-wrap gap-1 w-full ">
        {tech.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <img src={link} alt="tech-icon" className="h-full" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
