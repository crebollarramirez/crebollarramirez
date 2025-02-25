import React from "react";
import Numbers from "./Numbers";
import Me from "../assets/meSpain.jpg";

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
    <div
      id="about"
      className="lg:h-full w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl text-white mb-12">About</h1>
      <div className="lg:mt-0 flex items-center justify-center h-full">
        <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-10 flex-col md:flex-row lg:flex-row">
          {/* Me and Greeting */}
          <div className="flex flex-col items-center justify-center gap-3 w-full md:w-[50%] lg:w-[35%]">
            <div className="w-full flex justify-center items-center">
              <div className="hexagon w-[75%] lg:w-[85%] ">
                <img src={Me} alt="Person Icon" />
              </div>
            </div>

            {/* Greeting Text Column */}

            <p className="text-white/85 text-left text-lg">
              I'm a student at the{" "}
              <span className="text-beige">
                University of California - San Diego
              </span>
              . I am currently studying{" "}
              <span className="text-beige">Math-Computer Science </span>
              and <span className="text-beige">Cognitive Science ML</span>. I am
              interested in{" "}
              <span className="text-beige">Software Engineering</span> and
              <span className="text-beige"> Machine Learning</span>.
            </p>

            <Numbers styles="flex items-center justify-center gap-3 flex-wrap" />
          </div>

          <div className="w-full flex items-center justify-center md:hidden lg:hidden">
            <button className="w-full text-beige hover:text-beige border-2 border-beige px-8 py-1 transform transition-transform duration-300 hover:-translate-y-1 text-2xl">
              CV
            </button>
          </div>

          {/*Skills and stuff*/}
          <div className="flex flex-col justify-center items-center text-white w-full md:w-[50%] lg:w-[65%]">
            <h2 className="text-3xl text-white">Skills</h2>
            <div className="flex flex-col text-left gap-2 shadow">
              <h3 className="text-beige text-xl">Languages</h3>
              <div className="flex flex-wrap gap-1">
                {languages.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-2"
                  >
                    <img src={link} alt="tech-icon" className="logo" />
                  </a>
                ))}
              </div>

              <h3 className="text-beige text-xl">Technology</h3>
              <div className="flex flex-wrap gap-1">
                {tech.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-2"
                  >
                    <img src={link} alt="tech-icon" className="logo" />
                  </a>
                ))}
              </div>

              <h3 className="text-beige text-xl">Machine Learning</h3>
              <div className="flex flex-wrap gap-1">
                {machineLearning.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-2"
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
  );
};

export default About;
