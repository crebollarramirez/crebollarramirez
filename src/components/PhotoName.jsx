import React from "react";
import me from './../assets/me.jpeg'

export function PhotoName(){
    return (
        <div className="card-container">
        <div class="left-item grid-item photo-name">  
            <img class="photo-left-item" src={me} alt="me"/>
            <h1 class="photo-left-item reveal">Christopher Rebollar-Ramirez</h1>
            <h2 class="photo-left-item reveal"><em>Full-Stack Developer</em></h2>`
        </div>
    </div>
    );

}