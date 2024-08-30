import React from "react"
import './../../styles/aboutMeStyle.css'

export function AboutMe(){
    return (
        <div className="aboutMe-section scroll-item">
            <h1 className="titleText">About <span class="reveal">Me!</span></h1>
            <div className="otherText">
                <p><span class="reveal">Hello and welcome to my portfolio page!</span> I'm a full stack developer located in San Diego, USA. I am originally from <span class="reveal">Los Angeles</span> where I grew up.  
                I am currently studying Math-Computer Science and Cognitive Science ML at the <span class="reveal">University of California - San Diego.</span>
                </p>

                <p>My goal is to work in the field of <span class="reveal">machine learning.</span> I believe that integrating artificial intelligence into various <span class="reveal">technologies</span> not 
                only enhances efficiency but also holds <span class="reveal">tremendous potential</span> 
                for improving how we solve problems, which is why I am driven to contribute to <span class="reveal">advancements in AI.</span>
                </p>
            </div>
        </div>
    );
};