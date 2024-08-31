import React from "react";
import { NavButton } from "./NavButton";
import './../../styles/navigationStyle.css'

export function NavigationSection(){
    return (
        <div id="navSection">
            <NavButton targetId="about-me" name="About Me"/>
            <NavButton targetId="skills" name="Skills"/>
            <NavButton targetId="projects" name="Projects"/>
            <NavButton targetId="contact" name="Contact"/>
        </div>
    );
};