import React from "react";
import "./../../../styles/aboutMeStyle.css";
import { Numbers } from "./Numbers";

export function AboutMe({ id }) {
  return (
    <div className="aboutMe-section scroll-item" id={id}>
      <h1 className="titleText">About Me</h1>
      <div className="otherText">
        <p>
          <span className="reveal">
            Hello and welcome to my portfolio page!
          </span>{" "}
          I'm a student at the{" "}
          <span className="reveal">University of California - San Diego</span>.
          I am currently studying Math-Computer Science and Cognitive Science
          ML.
        </p> 
        <p>
          I am interested in <span className="reveal">Software Engineering</span> and <span className="reveal">Machine Learning</span>. I am
          passionate about using technology to solve real-world problems. I am
          also a huge foodie and enjoy cooking.
        </p>
      </div>
      <div className="numbers-bar">
        <Numbers />
      </div>
    </div>
  );
}
