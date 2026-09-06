import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020b14] overflow-hidden">
      
      {/* Live Moving Water Background (Framer Motion) */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/30 blur-[120px]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 50, 0], 
          y: [0, -50, 100, 0],
          scale: [1.2, 1, 1.2] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/30 blur-[150px]"
      />

      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.5, 1] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-teal-900/20 blur-[100px]"
      />

      <ParticlesProvider init={loadSlim}>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                grab: {
                  distance: 180,
                  links: {
                    opacity: 0.8,
                    color: "#00ffff"
                  },
                },
              },
            },
            particles: {
              color: {
                // Lots of different vibrant aquatic and light colors
                value: ["#ffffff", "#00ffff", "#00bfff", "#1e90ff", "#00fa9a", "#87ceeb"],
              },
              links: {
                color: "#4682b4",
                distance: 120,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080
                },
                // A LOT of dots!
                value: 350,
              },
              opacity: {
                value: { min: 0.4, max: 0.9 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>
    </div>
  );
}
