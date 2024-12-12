import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 50, // number of particles
              density: {
                enable: true,
                value_area: 800, // density of particles
              },
            },
            color: {
              value: "#ffffff", // particle color
            },
            shape: {
              type: "circle", // shape of the particles
            },
            opacity: {
              value: 0.5, // opacity of particles
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            size: {
              value: 3, // particle size
              random: true,
              anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
              },
            },
            links: {
              enable: true, // enabling links between particles
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
