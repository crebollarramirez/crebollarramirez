import React from "react";
import {IconButton} from "./IconButton"
import "../../styles/socialStyles.css";

export function SocialButtonsSection(){
    return (
        <div className="socials-container">
            <IconButton refer="https://www.linkedin.com/in/christopher-rebollar-ramirez-1210b5260/"  className="fa fa-linkedin animated-buttom"/>
            <IconButton refer="https://github.com/crebollarramirez" className="fa fa-github animated-buttom"/>
        </div>
    );
}

