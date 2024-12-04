import React from "react";
import "../../../styles/skillsSectionStyle.css";
import {SkillsBox} from "./SkillsBox"

export function SkillsSection({id}) {
  return (
    <div className="scroll-item skills-section" id={id}>
      <h1 className="titleText">My Skills</h1>
      <div className="skills-container">
        <SkillsBox title="Languages" items={["Python", "Typescript", "Markdown", "C++", "Java", "Swift", "HTML5", "CSS3", "Javascript"]} />
        <SkillsBox title="Technologies" items={["React", "Node.js", "Next.js", "Express.js", "MongoDB", "Django", "MySQL", "AWS", "Docker", "NPM"]} />
        <SkillsBox title="Machine Learning" items={["Pandas", "Tensorflow", "Matplotlib", "Scikit-learn", "Numpy"]} />
      </div>
    </div>
  );
}
