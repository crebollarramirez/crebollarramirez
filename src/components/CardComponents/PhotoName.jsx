import React from "react";
import me from './../../assets/me.jpeg'

export function PhotoName(){
    return (
        <div className="card-item photo-name">  
            <div className="imageContainer">
                <img className="photo-left-item" src={me} alt="me"/>
            </div>
            <h1 className="photo-left-item">Christopher Rebollar-Ramirez</h1>
            <h2 className="photo-left-item"><em>Computer Science Student</em></h2>`
        </div>
    );

}