import React from "react";
import Numbers from "./Numbers";
import Me from "../assets/meSpain.jpg";
import ResumeButton from "./Resume_Button/ResumeButton";
import data from "../portfolio_data.json";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center scroll-mt-24 snap-start"
    >
      <h1 className="text-4xl text-white mt-4 mb-4 md:mt-0 md:mb-0 lg:mb-0 lg:mt-0">
        {language === "EN" ? "About Me" : "Sobre mí"}
      </h1>
      <div className="lg:mt-0 flex items-center justify-center flex-col gap-4 min-h-screen">
        <div className="flex items-center justify-center gap-4 md:gap-4 lg:gap-10 flex-col md:flex-row lg:flex-row">
          {/* Me and Greeting */}
          <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[50%] lg:w-[35%]">
            <div className="w-full flex justify-center items-center">
              <div className="hexagon w-[75%] lg:w-[85%] ">
                <img src={Me} alt="Person Icon" />
              </div>
            </div>

            {/* Greeting Text Column */}
            <div className="flex flex-col items-center justify-center gap-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm p-4">
              {language === "EN" ? (
                <h2 className="text-3xl text-white/85">Hello!</h2>
              ) : (
                <h2 className="text-3xl text-white/85">Hola!</h2>
              )}

              {language === "EN" ? (
                <p className="text-white/85 text-xl text-left">
                  I'm a student at the{" "}
                  <span className="text-beige">
                    University of California - San Diego
                  </span>
                  , currently studying
                  <span className="text-beige"> Math-Computer Science</span> and
                  <span className="text-beige"> Cognitive Science</span> with a
                  specialization in{" "}
                  <span className="text-beige">Machine Learning</span> and{" "}
                  <span className="text-beige">Neural Computation</span>. My
                  interests include
                  <span className="text-beige"> Software Engineering</span>,
                  <span className="text-beige"> Full Stack Development</span>,
                  and
                  <span className="text-beige"> Machine Learning</span>.
                </p>
              ) : (
                <p className="text-white/85 text-xl text-left">
                  Soy un estudiante de la {""}
                  <span className="text-beige">
                    Universidad de California - San Diego
                  </span>
                  , estoy estudiando
                  <span className="text-beige">
                    {" "}
                    Matemáticas-Ciencias de la computación
                  </span>{" "}
                  y
                  <span className="text-beige"> Ciencia Cognitiva</span> con
                  especialización en{" "}
                  <span className="text-beige">aprendizaje automático</span> y{" "}
                  <span className="text-beige">computación neuronal</span>. Mis
                  intereses incluyen la
                  <span className="text-beige"> ingeniería de software</span>,
                  el
                  <span className="text-beige"> desarrollo full stack</span> y
                  el
                  <span className="text-beige"> aprendizaje automático</span>.
                </p>
              )}

              <div className="w-full flex items-center justify-center md:hidden lg:hidden">
                <ResumeButton size={"w-full py-[0.4em] text-xl"} />
              </div>
            </div>
          </div>

          {/*Skills and stuff*/}
          <div className="flex flex-col justify-center items-center text-white w-full md:w-[50%] lg:w-[65%] bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm p-4">
            {language === "EN" ? (
              <h2 className="text-3xl text-white/85">Skills</h2>
            ) : (
              <h2 className="text-3xl text-white/85">Habilidades</h2>
            )}

            <div className="flex flex-col text-left gap-4 shadow text-beige text-2xl font-semibold">
              {language === "EN" ? <h3>Languages</h3> : <h3>Lenguajes</h3>}
              <div className="flex flex-wrap gap-1 mb-2">
                {data.skills.languages.map((link, index) => (
                  <img src={link} alt="tech-icon" className="h-[1.4em]" />
                ))}
              </div>
              {language === "EN" ? <h3>Technology</h3> : <h3>Tecnología</h3>}

              <div className="flex flex-wrap gap-1 mb-2">
                {data.skills.tech.map((link, index) => (
                  <img src={link} alt="tech-icon" className="h-[1.4em]" />
                ))}
              </div>

              {language === "EN" ? (
                <h3>Machine Learning</h3>
              ) : (
                <h3>Aprendizaje Automático</h3>
              )}
              <div className="flex flex-wrap gap-1 mb-2">
                {data.skills.machineLearning.map((link, index) => (
                  <img src={link} alt="tech-icon" className="h-[1.4em]" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Numbers styles="w-full flex items-center justify-around gap-3 flex-wrap bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm p-4" />
      </div>
    </div>
  );
};
export default About;
