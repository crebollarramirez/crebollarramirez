import React from "react";
import "./../../../styles/projectSectionStyle.css";
import { Project } from "./Project";

export function ProjectsSection({ id }) {
  return (
    <div className="scroll-item projects-section" id={id}>
      <h1 className="titleText">Projects</h1>
      <div className="projects-container">
        <Project
          title="DaybyDay"
          items={[
            "Developed a responsive frontend with React.js, achieving 20% faster load times and a 15% increase in daily task management usage.",
            "Built a robust backend using Python Django and AWS DynamoDB, supporting 20+ active users daily with 30% more efficient data handling and storage.",
            "Implemented secure user authentication with Django and JWT tokens, achieving a 99% login success rate and minimal unauthorized access.",
            "Integrated OpenAI API and WebSockets for a real-time chatbot, boosting productivity by 25% and improving user retention by 10%.",
            "Conducted unit testing, achieving 95% code coverage and identifying 20% more bugs, resulting in a 30% reduction in post-deployment issues."
          ]}
          date={"Jul 2024 – Oct 2024"}
          githubLink={"https://github.com/crebollarramirez/DayByDay"}
          buttonStyle={"fa-github"}
        />
        <Project title="Project 2" />
        <Project title="Project 3" />
        <Project title="Project 4" />
      </div>
    </div>
  );
}
