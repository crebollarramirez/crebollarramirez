import React from "react";
import "./../../styles/projectSectionStyle.css";

export function ProjectsSection({ id }) {
  return (
    <div className="scroll-item projects-section" id={id}>
      <h1 className="titleText">Projects</h1>
      <div className="bottomSection">
        <h1>Coming Soon!
         <br></br> Still Working on it!
        </h1>
      </div>
    </div>
  );
}
