import overworldImage from "../assets/overworld.png";

const Welcome = () => {

  return (
    <div className="snap-section d-flex align-items-center justify-content-center flex-row min-vh-100 min-vw-100 flex-column">
      <div className="d-flex align-items-start justify-content-center flex-column text-start gap-3 ">
        <div className="">
        <h1 className="text-white huge-text">Hello I'm, <span className="color-beige">Chris.</span></h1>
          <h1 className="text-white huge-text"></h1>
        </div>
        <div className="">
          <h2 className="fs-3 text-white">I'm a <span className="color-beige">Software Engineer</span>.</h2>
        </div>
        <div className="d-flex gap-3 p-1 align-items-center justify-content-end flex-row w-100">
          <a
            href="https://www.linkedin.com/in/christopher-rebollar-ramirez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
          >
            <i className="fa fa-linkedin-square fs-2 text-decoration-none text-white"></i>
          </a>
          <a
            href="https://github.com/crebollarramirez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
          >
            <i className="fa fa-github fs-2 text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
