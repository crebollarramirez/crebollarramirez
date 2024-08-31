import React from "react";

export function NavButton({targetId, children}){
    const handleClick = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <button id="navButton" onClick={handleClick}>
                Testing
            </button>
    );
};