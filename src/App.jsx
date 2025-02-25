import React, { useRef, useEffect } from "react";
import "./styles.css"; // Importing CSS styles
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience"; // Importing Experience component
import Contact from "./Components/Contact";

function App() {
  const lightRef = useRef(null); // Reference for the light element

  useEffect(() => {
    const light = lightRef.current;

    // Function to move the light effect
    const handleMouseMove = (e) => {
      if (light) {
        light.style.top = `${e.clientY}px`; // Update light position vertically
        light.style.left = `${e.clientX}px`; // Update light position horizontally
      }
    };

    // Function to adjust blur on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const maxBlur = 10; // Maximum blur value
      const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scroll height
      const blurAmount = (scrollPosition / maxScroll) * maxBlur; // Adjust sensitivity
      document.body.style.setProperty("--blur-amount", `${blurAmount}px`); // Update CSS variable
    };

    // Attach event listeners
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to set up effect once

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="light" ref={lightRef}></div> {/* Light effect */}
      <div className="h-screen flex flex-col justify-center items-center w-[95%] md:w-[90%] lg:w-[70%]">
        <Navbar /> {/* Navigation bar */}
        <main className="flex-1 overflow-y-auto hide-scrollbar space-y-4">
          <Welcome />
          <About />
          <Experience /> 
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;