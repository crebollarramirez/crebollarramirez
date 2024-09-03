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
          ML. I am originally from <span className="reveal">Los Angeles</span>{" "}
          where I grew up.{" "}
        </p>

        <p>
          My goal is to excel in the field of machine learning. I am actively
          working on machine learning projects, exploring various algorithms,
          and applying them to real-world problems. In addition to honing my
          skills in machine learning, I am also delving into full-stack
          development, gaining experience in both front-end and back-end
          technologies. As I continue to grow as a software engineer, I am
          committed to mastering these areas to contribute effectively to
          innovative projects and solutions.
        </p>
      </div>
      <div className="numbers-bar">
        <Numbers />
      </div>
    </div>
  );
}
