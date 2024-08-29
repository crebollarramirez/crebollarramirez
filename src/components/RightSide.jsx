import React from "react";
import gsap from 'gsap';
import {AboutMe} from './AboutMe'
import { OtherScreen } from "./OtherScreen";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";

// About me
// Skills
// Projects 
// Contact Information


export function RightSide(){
    return (
        <div className="rightSide scrollable-container">
            <AboutMe/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>

        
    );
}