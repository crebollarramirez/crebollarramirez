import React, { useRef, useEffect } from "react";
import "./App.css";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <>
      <div className="light" ref={lightRef}></div> {/* Light effect */}
      <main className="d-flex align-items-center justify-content-center flex-column min-vh-100 min-vw-100">
        <Welcome />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;