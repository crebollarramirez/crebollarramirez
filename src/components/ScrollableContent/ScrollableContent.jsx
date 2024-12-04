import React from "react";
import {AboutMe} from './AboutMeComponents/AboutMe'
import { SkillsSection } from "./SkillsSection/SkillsSection";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";
import { ContactSection } from "./ContactSection";
import "../../styles/scrollableStyle.css";

// About me
// Skills
// Projects 
// Contact Information


export function ScrollableContent(){
    return (
        <div className="scrollable-container">
            <AboutMe id="about-me"/>
            <SkillsSection id="skills"/>
            <ProjectsSection id="projects" />
            <ContactSection id="contact"/>
        </div>  
    );
}