import React from "react";
import "./../../styles/contactSectionStyle.css";

export function ContactSection({ id }) {
  return (
    <div className="scroll-item contact-section" id={id}>
      <div className="title-container">
        <h1 className="titleText">My Contact</h1>
      </div>

      <div className="bottom-contact">
        <h3 className="bottom-container-item">Get in Touch</h3>
        <h2 className="bottom-container-item">Contact Me</h2>
        <div className="email-container bottom-container-item">
          <div className="envelope-container">
            <i class="fa fa-envelope"></i>
          </div>
          <h4>christopherrebollar0@icloud.com</h4>
        </div>
      </div>
    </div>
  );
}
