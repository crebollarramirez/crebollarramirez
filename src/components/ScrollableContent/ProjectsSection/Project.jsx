import React from "react";
import "./../../../styles/projectStyle.css";
import { IconButton } from "../../CardComponents/IconButton";


export function Project({ title, date, items, githubLink}) {
  return (
    <div className="project-container">
      <div className="text-container">
        <div className="top-container">
          <h1>{title}</h1>
          <h3>{date}</h3>
        </div>

        {/* Check if items prop is provided and render a list */}
        {items && items.length > 0 && (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="repo-button-container">
        <IconButton refer={githubLink} className={"fa repo-button fa-github"} /> 
      </div>
        
    </div>
  );
}
