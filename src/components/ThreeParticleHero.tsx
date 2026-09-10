import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useScroll, motion, useTransform } from 'framer-motion';
import * as THREE from 'three';

const ParticleSystem = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, originalPositions } = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      
      const theta = phi * i;
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      
      const scale = 5;
      
      positions[i * 3] = x * scale;
      positions[i * 3 + 1] = y * scale;
      positions[i * 3 + 2] = z * scale;
      
      originalPositions[i * 3] = x * scale;
      originalPositions[i * 3 + 1] = y * scale;
      originalPositions[i * 3 + 2] = z * scale;
    }
    
    return { positions, originalPositions };
  }, []);

  const [opacity, setOpacity] = useState(1);

  useFrame((state) => {
    const progress = scrollYProgress.get();
    
    if (pointsRef.current) {
      if (progress <= 0.4) {
        const rotationProgress = progress / 0.4;
        pointsRef.current.rotation.y = rotationProgress * Math.PI;
        pointsRef.current.rotation.z = rotationProgress * (Math.PI / 4);
        state.camera.position.z = 12 - (rotationProgress * 5);
        
        const positionsAttr = pointsRef.current.geometry.attributes.position;
        for (let i = 0; i < positionsAttr.count * 3; i++) {
          positionsAttr.array[i] = originalPositions[i];
        }
        positionsAttr.needsUpdate = true;
        setOpacity(1);
      } 
      else if (progress > 0.4 && progress <= 0.8) {
        const noiseProgress = (progress - 0.4) / 0.4;
        
        const positionsAttr = pointsRef.current.geometry.attributes.position;
        for (let i = 0; i < positionsAttr.count; i++) {
          const idx = i * 3;
          const x = originalPositions[idx];
          const y = originalPositions[idx + 1];
          const z = originalPositions[idx + 2];
          
          const dirX = x * (1 + noiseProgress * (Math.sin(i * 0.1) * 2));
          const dirY = y * (1 + noiseProgress * (Math.cos(i * 0.1) * 2));
          const dirZ = z * (1 + noiseProgress * (Math.sin(i * 0.2) * 2));
          
          positionsAttr.array[idx] = dirX;
          positionsAttr.array[idx + 1] = dirY + noiseProgress * 2;
          positionsAttr.array[idx + 2] = dirZ;
        }
        positionsAttr.needsUpdate = true;
        setOpacity(1);
      }
      else {
        const fadeProgress = (progress - 0.8) / 0.2;
        setOpacity(1 - fadeProgress);
      }
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  );
};

export default function ThreeParticleHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="h-[300vh] w-full bg-black relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <ParticleSystem scrollYProgress={scrollYProgress} />
          <EffectComposer>
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} opacity={1.5} />
          </EffectComposer>
        </Canvas>
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) 
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl font-sans text-center px-4">
            The Next Generation
          </h1>
          <p className="mt-4 text-xl text-cyan-200/80 max-w-2xl text-center px-4">
            Scroll down to explore
          </p>
        </motion.div>
      </div>
    </div>
  );
}
