import React from "react";
import me from "./../../assets/me.jpeg";
import "../../styles/photoNameStyle.css";

export function PhotoName() {
  return (
    <div className="photo-name">
      <div className="imageContainer">
        <img className="photo-left-item" src={me} alt="me" />
      </div>
      <div className="name-ocu">
        <h1 className="photo-left-item">Christopher Rebollar-Ramirez</h1>
        <h2 className="photo-left-item">
          <em>Software Engineer</em>
        </h2>
      </div>
    </div>
  );
}
