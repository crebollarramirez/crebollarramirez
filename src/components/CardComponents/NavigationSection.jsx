// NavigationSection.js
import React, { useState, useEffect } from "react";
import { NavButton } from "./NavButton";
import './../../styles/navBar.css';

export function NavigationSection() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('.scrollable-container > div');
        const options = {
            root: null,
            threshold: 0.05
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div id="navSection">
            <NavButton targetId="about-me" name="About Me" isActive={activeSection === 'about-me'} />
            <NavButton targetId="skills" name="Skills" isActive={activeSection === 'skills'} />
            <NavButton targetId="projects" name="Projects" isActive={activeSection === 'projects'} />
            <NavButton targetId="contact" name="Contact" isActive={activeSection === 'contact'} />
        </div>
    );
};
