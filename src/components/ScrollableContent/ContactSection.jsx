import React from "react";
import "./../../styles/contactSectionStyle.css";

export function ContactSection({ id }) {
  return (
    <div className="scroll-item contact-section" id={id}>
      <h1 className="titleText">My Contact</h1>
    </div>
  );
}
