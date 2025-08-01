import { useRef, useEffect, useState } from "react";
import sweResume from "../assets/crebollarramirez_resumeswe.pdf";
import mlResume from "../assets/crebollarramirez_resumeML.pdf";
import { useTranslation } from "react-i18next";

const ResumeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const { t } = useTranslation();
  const [activeResume, setActiveResume] = useState("swe"); // Default to SWE resume

  useEffect(() => {
    // Handle clicking outside the modal to close it
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Handle ESC key to close modal
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const getResumeTitle = () => {
    return activeResume === "swe"
      ? t("resumeModal.sweTitle")
      : t("resumeModal.mlTitle");
  };

  const getResumeFile = () => {
    return activeResume === "swe" ? sweResume : mlResume;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center   backdrop-blur-sm bg-black/20">
      <div
        ref={modalRef}
        className="border border-beige w-[95%] max-w-4xl max-h-[90vh] flex flex-col"
      >
        <div className="flex justify-between items-center border-b border-beige/30 p-4">
          <h2 className="text-2xl text-beige">{getResumeTitle()}</h2>
          <button
            onClick={onClose}
            className="text-beige text-2xl focus:outline-none border border-beige px-4 transform transition-transform duration-300 hover:-translate-y-1"
          >
            ×
          </button>
        </div>

        <div className="border-b border-beige/30 p-2 flex gap-2 ">
          <button
            onClick={() => setActiveResume("swe")}
            className={`px-4 py-2 transition-colors ${
              activeResume === "swe"
                ? "bg-beige text-slate-900 font-medium"
                : "text-beige transform transition-transform duration-300 hover:-translate-y-1 border border-beige"
            }`}
          >
            {t("resumeModal.sweTitleShort")}
          </button>
          <button
            onClick={() => setActiveResume("ml")}
            className={`px-4 py-2 transition-colors ${
              activeResume === "ml"
                ? "bg-beige text-slate-900 font-medium"
                : "text-beige transform transition-transform duration-300 hover:-translate-y-1 border border-beige"
            }`}
          >
            {t("resumeModal.mlTitleShort")}
          </button>
        </div>

        <div className="overflow-auto flex-grow p-2">
          <object
            data={getResumeFile()}
            type="application/pdf"
            className="w-full h-[65vh] bg-white"
          >
            <p className="text-black/60 text-center p-4">
              {t("resumeModal.pdfError")}
            </p>
          </object>
        </div>

        <div className="border-t border-beige/30 p-4 flex justify-end">
          <a
            href={getResumeFile()}
            download={`crebollarramirez_${
              activeResume === "swe" ? "swe" : "ml"
            }_resume.pdf`}
            className="text-beige border border-beige py-2 px-4 transform transition-transform duration-300 hover:-translate-y-1"
          >
            {t("resumeModal.download")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
