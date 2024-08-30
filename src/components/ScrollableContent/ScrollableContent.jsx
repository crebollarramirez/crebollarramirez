import React from "react";
import {AboutMe} from './AboutMe'
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";

// About me
// Skills
// Projects 
// Contact Information


export function ScrollableContent(){
    return (
        <div className="scrollable-container">
            <AboutMe/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>  
    );
}