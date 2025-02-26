import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import { LanguageProvider } from "./Components/LanguageContext";

function App() {
  const lightRef = useRef(null); // Reference for the light element
  const [activeSection, setActiveSection] = useState(""); // State to track active section

  useEffect(() => {
    const light = lightRef.current;

    // Function to move the light effect
    const handleMouseMove = (e) => {
      if (light) {
        light.style.top = `${e.clientY}px`;
        light.style.left = `${e.clientX}px`;
      }
    };

    // Attach event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to set up effect once

  useEffect(() => {
    const sections = document.querySelectorAll("main > div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="light" ref={lightRef}></div> {/* Light effect */}
      <div className="h-screen flex flex-col justify-center items-center w-[95%] md:w-[90%] lg:w-[70%]">
        <LanguageProvider>
          <Navbar activeSection={activeSection} />
          <main className="flex-1 overflow-y-auto hide-scrollbar space-y-10">
            <Welcome />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </LanguageProvider>
      </div>
    </div>
  );
}

export default App;
