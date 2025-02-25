import React from "react";


const Contact = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start" id="contact">
      <h1 className="text-4xl text-white mb-12">Contact</h1>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center w-full h-full gap-4">
        <div className="bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 flex h-1/3 w-full lg:h-1/3 lg:w-1/3 flex-col justify-start items-center p-2 backdrop-blur-sm">
          <h2 className="text-3xl text-beige mt-4">My Socials</h2>
          <div className="w-full h-full flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/christopher-rebollar-ramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-linkedin-square text-6xl no-underline text-white hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
            <a
              href="https://github.com/crebollarramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-github text-6xl text-white hover:text-beige transition-colors duration-300 cursor-pointer"></i>
            </a>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 flex h-1/3 w-full lg:h-1/3 lg:w-1/3 justify-start items-center flex-col p-2 backdrop-blur-sm">
          <h2 className="text-3xl text-beige mt-4">Email</h2>
          <div className="h-full w-full flex items-center justify-center flex-col gap-2">
            <a
              href="mailto:christopherrebollar0@icloud.com"
              className="text-2xl text-white hover:text-beige transition-colors duration-300"
            >
              christopherrebollar0@icloud.com
            </a>
            <a
              href="mailto:crebollarramirez@ucsd.edu"
              className="text-2xl text-white hover:text-beige transition-colors duration-300"
            >
              crebollarramirez@ucsd.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
