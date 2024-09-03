// NavButton.js
import React from "react";
import './../../styles/navigationStyle.css';

export function NavButton({ targetId, name, isActive }) {
    const handleClick = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button 
            id={`navButton-${targetId}`} 
            className={`navButton ${isActive ? 'active' : ''}`} 
            onClick={handleClick}
        >
            <div className="navText">
                {name}
            </div>
        </button>
    );
};
