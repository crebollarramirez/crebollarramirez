import React from "react";
import {SocialButton} from "./SocialButton"

export function SocialButtonsSection(){
    return (
        <div className="socials card-item">
            <SocialButton refer="https://www.facebook.com/christopher.rebollar.9/" className="fa fa-facebook"/>
            <SocialButton refer="https://www.linkedin.com/in/christopher-rebollar-ramirez-1210b5260/"  className="fa fa-linkedin"/>
            <SocialButton refer="https://github.com/crebollarramirez" className="fa fa-github"/>
            <SocialButton refer="https://www.instagram.com/thereal_stezzy/" className="fa fa-instagram"/>
        </div>
    );
}

