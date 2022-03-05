import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { useState } from "react";

export default function ParticleBackground() {

  const particlesInit = (main) => {
    // console.log(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false,
                smooth: 300,
                force: 50,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.4,
              size: 40,
            },
            push: {
              quantity: 1,
              delay: 0,
            },
            repulse: {
              distance: 300,
              duration: 4,
            },
            grab: {
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </>
  );
}
