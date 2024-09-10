import React from "react";
import resume from "./../../assets/crebollarramirez-resume.pdf";

export function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; // Update with the actual path to your PDF file
    link.download = "crebollarramirez-resume.pdf"; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="download-button-container grid-item-buttons">
      <button className="DLbutton" onClick={handleDownload}>
        Download CV
      </button>
    </div>
  );
}
