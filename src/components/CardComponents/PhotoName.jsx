import React from "react";
import me from './../../assets/me.jpeg'

export function PhotoName(){
    return (
        <div class="card-item photo-name">  
            <div className="imageContainer">
                <img class="photo-left-item" src={me} alt="me"/>
            </div>
            <h1 class="photo-left-item">Christopher Rebollar-Ramirez</h1>
            <h2 class="photo-left-item"><em>Computer Science Student</em></h2>`
        </div>
    );

}