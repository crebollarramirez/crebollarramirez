import React from "react";
import FileIcon from "./fileIcon";
import resume from "../../assets/crebollarramirez_resume.pdf";

const ResumeButton = ({ size = ""}) => {
  return (
    <a 
      className={`text-beige hover:text-beige border-2 border-beige transform transition-transform duration-300 hover:-translate-y-1 ${size}`} 
      href={resume} 
      download="crebollarramirez_resume.pdf"
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <FileIcon/>
        <p>CV</p>
      </div>
    </a>
  );
};

export default ResumeButton;