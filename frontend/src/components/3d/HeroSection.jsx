import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const HeroSection = () => {
  const groupRef = useRef();
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main name text */}
      <Text
        position={[0, 2, 0]}
        fontSize={3}
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
      >
        {portfolioData.personal.name}
      </Text>
      
      {/* Title */}
      <Text
        position={[0, 0.5, 0]}
        fontSize={1.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {portfolioData.personal.title}
      </Text>
      
      {/* Tagline */}
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.8}
        color="#aaaaaa"
        anchorX="center"
        anchorY="middle"
      >
        {portfolioData.personal.tagline}
      </Text>
      
      {/* Floating holographic sphere */}
      <Sphere ref={sphereRef} position={[6, 0, -2]} args={[1, 32, 32]}>
        <meshBasicMaterial 
          color="#0066ff" 
          transparent 
          opacity={0.3}
          wireframe={true}
        />
      </Sphere>
      
      {/* Floating cubes */}
      <Box position={[-6, 1, -3]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.7} />
      </Box>
      
      <Box position={[4, -2, -1]} args={[0.6, 0.6, 0.6]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.6} />
      </Box>
      
      {/* Tech-themed floating elements */}
      <Box position={[-4, -1, -2]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.8} />
      </Box>
    </group>
  );
};