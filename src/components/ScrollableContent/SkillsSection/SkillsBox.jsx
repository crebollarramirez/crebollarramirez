import React from "react";
import { Skill } from "./Skill";
import "../../../styles/skillsBoxStyle.css";

export function SkillsBox({ title, items }) {
  return (
    <div className="skillsBox-container">
      <h1>{title}</h1>
      <div className="all-skills-container">
        {items.map((item, index) => (
          <Skill s={item} key={index} />
        ))}
      </div>
    </div>
  );
}
