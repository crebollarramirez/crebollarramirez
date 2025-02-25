import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "ACM Hack",
      period: "Sep 2024 - Jan 2025",
      description: [
        "Developed Swipe Style, a Tinder-inspired web app for browsing fashion items, using MERN Stack and TailwindCSS.",
        "Implemented 10 API routes for managing user interactions and integrating Google OAuth for secure authentication.",
        "Led a team of 5 members, organized weekly meetings, and delegated tasks to ensure efficient development."
      ],
    },
    {
      title: "Software Engineer",
      company: "Company Name",
      period: "2022 - 2023",
      description:
        "Developed and maintained responsive web applications. Implemented new features and optimized existing codebase.",
    },

    // Add more experiences as needed
  ];

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen" id="experience">
      <h1 className="text-4xl text-white mb-12">Experience</h1>
      <div className="w-full lg:w-[60%]">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 flex w-full">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-beige"></div>
              {index !== experiences.length - 1 && (
                <div className="w-0.5 h-full bg-beige/30"></div>
              )}
            </div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-beige text-xl font-semibold">
                  {exp.title}
                </h3>
                <h4 className="text-white/80 font-medium mt-1">
                  {exp.company}
                </h4>
                <p className="text-white/60 text-sm mt-1">{exp.period}</p>
                
                {Array.isArray(exp.description) ? (
                  <ul className="text-white/70 mt-3 list-disc ">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/70 mt-3">{exp.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;