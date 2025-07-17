import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';

export const BackgroundEffects = ({ currentSection }) => {
  const groupRef = useRef();
  const objectsRef = useRef([]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    
    objectsRef.current.forEach((obj, index) => {
      if (obj) {
        obj.position.y = Math.sin(state.clock.elapsedTime * 2 + index) * 0.5;
        obj.rotation.x = state.clock.elapsedTime * 0.3;
        obj.rotation.z = state.clock.elapsedTime * 0.2;
      }
    });
  });

  const getColorBySection = (section) => {
    const colors = [
      '#64ffda', // Home - Cyan
      '#ff6600', // Education - Orange
      '#9c27b0', // Entrepreneurship - Purple
      '#4caf50', // Experience - Green
      '#2196f3', // Projects - Blue
      '#ff9800', // Skills - Amber
      '#ffd700', // Achievements - Gold
      '#64ffda'  // Contact - Cyan
    ];
    return colors[section] || '#64ffda';
  };

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      <Sphere 
        ref={(el) => objectsRef.current[0] = el}
        position={[8, 2, -5]} 
        args={[1, 32, 32]}
      >
        <meshStandardMaterial 
          color={getColorBySection(currentSection)} 
          transparent 
          opacity={0.3}
          wireframe={true}
        />
      </Sphere>
      
      <Box 
        ref={(el) => objectsRef.current[1] = el}
        position={[-8, -2, -3]} 
        args={[1.5, 1.5, 1.5]}
      >
        <meshStandardMaterial 
          color={getColorBySection(currentSection)} 
          transparent 
          opacity={0.4}
        />
      </Box>
      
      <Torus 
        ref={(el) => objectsRef.current[2] = el}
        position={[0, 4, -8]} 
        args={[1, 0.3, 16, 100]}
      >
        <meshStandardMaterial 
          color={getColorBySection(currentSection)} 
          transparent 
          opacity={0.5}
          wireframe={true}
        />
      </Torus>
      
      <Sphere 
        ref={(el) => objectsRef.current[3] = el}
        position={[-6, 3, -2]} 
        args={[0.8, 32, 32]}
      >
        <meshStandardMaterial 
          color={getColorBySection(currentSection)} 
          transparent 
          opacity={0.6}
        />
      </Sphere>
      
      <Box 
        ref={(el) => objectsRef.current[4] = el}
        position={[6, -3, -4]} 
        args={[1, 1, 1]}
      >
        <meshStandardMaterial 
          color={getColorBySection(currentSection)} 
          transparent 
          opacity={0.3}
          wireframe={true}
        />
      </Box>
      
      {/* Additional ambient shapes */}
      <Sphere 
        ref={(el) => objectsRef.current[5] = el}
        position={[4, 0, -6]} 
        args={[0.5, 16, 16]}
      >
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.2}
        />
      </Sphere>
      
      <Box 
        ref={(el) => objectsRef.current[6] = el}
        position={[-4, -1, -7]} 
        args={[0.6, 0.6, 0.6]}
      >
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.25}
        />
      </Box>
    </group>
  );
};