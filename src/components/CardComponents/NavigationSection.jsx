import React from "react";
import { NavButton } from "./NavButton";

export function NavigationSection(){
    return (
        <div id="navSection">
            <NavButton targetId="about-me"/>
            <NavButton targetId="skills"/>
            <NavButton targetId="projects"/>
            <NavButton targetId="contact"/>
        </div>
    );
};