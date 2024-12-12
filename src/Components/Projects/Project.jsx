import React from "react";

const Project = ({ title, tech, details, githubLink, date }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-start flex-column p-4 shadow gap-4 w-100 h-100 text-white">
      <div className="d-flex align-items-center justify-content-start flex-column gap-0 w-100 text-white">
        <h1 className="fs-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark text-white"
          >
            {title} <i className="fa fa-github fs-2"></i>
          </a>
        </h1>
        <h3 className="fs-6">{date}</h3>
      </div>

      {/* Render details as a list if it's an array */}
      <div className="d-flex flex-column text-start flex-wrap">
        <ul className="fs-6 text-wrap">
          {Array.isArray(details) ? (
            details.map((detail, index) => <li key={index}>{detail}</li>)
          ) : (
            <li>{details}</li> // If it's a single string, render it as a list item
          )}
        </ul>
      </div>

      {/* Display tech links dynamically */}
      <div className="d-flex align-items-center justify-content-center tech-links flex-wrap gap-1">
        {tech.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={link}
              alt="tech-icon"
              style={{ width: "auto", height: "25px" }} // Customize size as needed
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
