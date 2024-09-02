import React from "react";
import "./../../styles/aboutMeStyle.css";
import GitHubCommits from "./GitHubCommits";
export function AboutMe({ id }) {
  return (
    <div className="aboutMe-section scroll-item" id={id}>
      <h1 className="titleText">
        About <span class="reveal">Me!</span>
      </h1>
      <div className="otherText">
        <p>
          <span class="reveal">Hello and welcome to my portfolio page!</span>{" "}
          I'm a student at the{" "}
          <span class="reveal">University of California - San Diego</span>. I am
          currently studying Math-Computer Science and Cognitive Science ML. I
          am originally from <span class="reveal">Los Angeles</span> where I
          grew up.{" "}
        </p>

        <p>
          My goal is to work in the field of{" "}
          <span class="reveal">machine learning.</span> I am currently working 
          on machine learning projects and trying out full-stack development. 
        </p>
      </div>

      
    </div>
  );
}
