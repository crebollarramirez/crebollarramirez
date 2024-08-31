import React from "react";
import './../../styles/navigationStyle.css'

export function NavButton({targetId, name}){
    const handleClick = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <button id="navButton" onClick={handleClick}>
                <div className="navText">
                    {name}
                </div>
                
            </button>
    );
};