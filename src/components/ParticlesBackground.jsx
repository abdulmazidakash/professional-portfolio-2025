import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    
    const particlesInit = useCallback(async (engine) => {
      await loadSlim(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      console.log(container);
    }, []);
  
    const isDark = typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark");
  
    const particleColor = isDark ? "#ffffff" : "#888888"; // use light gray in light mode
  
    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: particleColor,
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.8,
                random: true,
              },
              size: {
                value: { min: 2, max: 8 },
                random: true,
              },
              move: {
                enable: true,
                direction: "bottom",
                speed: 1,
                outModes: {
                  default: "out",
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    );
  };
  

export default ParticlesBackground;
