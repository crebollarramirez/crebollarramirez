import React from "react";
import person from "../assets/person-outline.svg";
import Numbers from "./Numbers";

const About = () => {
  const languages = [
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  ];

  const tech = [
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
    "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
  ];

  const machineLearning = [
    "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
    "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
    "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
  ];

  return (
    <div id="about" className="min-vh-100 min-vw-100">
      <h1 className="fs-1 text-white">About</h1>
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="container">
          {/* Row containing the SVG and greeting text */}
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-6 d-flex align-items-center justify-content-center flex-column gap-3">
              {/* SVG Column */}
              <div className="w-100 col-sm-4 col-md-2 d-flex justify-content-center align-items-center">
                <div className="w-50">
                  <img src={person} alt="Person Icon" className="w-100 h-100" />
                </div>
              </div>
              {/* Greeting Text Column */}
              <p className="text-white text-start fs-5">
                Greetings! I'm a student at the{" "}
                <span className="color-beige">
                  University of California - San Diego
                </span>
                . I am currently studying{" "}
                <span className="color-beige">Math-Computer Science </span>
                and <span className="color-beige">Cognitive Science ML</span>. I
                am interested in{" "}
                <span className="color-beige">Software Engineering</span> and
                <span className="color-beige"> Machine Learning</span>. I am
                passionate about using technology to solve real-world problems.
                I am also a huge <span className="color-beige">foodie</span> and
                enjoy <span className="color-beige">cooking</span>.
              </p>

              <Numbers styles="d-flex align-items-center justify-content-center gap-3 flex-wrap" />
            </div>

            <div className="col-lg-6 d-flex flex-column text-white">
              <h2 className="fs-2 color-beige">Skills</h2>
              <div className="d-flex flex-column text-start gap-2 shadow">
                <h3 className="color-beige fs-4">Languages</h3>
                <div className="d-flex flex-wrap gap-1">
                  {languages.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-block mb-2"
                    >
                      <img src={link} alt="tech-icon" className="logo" />
                    </a>
                  ))}
                </div>

                <h3 className="color-beige fs-4">Technology</h3>
                <div className="d-flex flex-wrap gap-1">
                  {tech.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-block mb-2"
                    >
                      <img src={link} alt="tech-icon" className="logo" />
                    </a>
                  ))}
                </div>

                <h3 className="color-beige fs-4">Machine Learning</h3>
                <div className="d-flex flex-wrap gap-1">
                  {machineLearning.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-block mb-2"
                    >
                      <img src={link} alt="tech-icon" className="logo" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;