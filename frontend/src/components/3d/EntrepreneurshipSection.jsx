import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox, Sphere } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const EntrepreneurshipSection = () => {
  const groupRef = useRef();
  const centralCardRef = useRef();
  const orbitRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (centralCardRef.current) {
      centralCardRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
      centralCardRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Section Title */}
      <Text
        position={[0, 6, 0]}
        fontSize={2.5}
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        ENTREPRENEURSHIP
      </Text>
      
      {/* Central Company Card */}
      <group ref={centralCardRef} position={[0, 1, 0]}>
        <RoundedBox args={[8, 4, 0.3]} radius={0.1}>
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.95} />
        </RoundedBox>
        
        <Text
          position={[0, 1.3, 0.2]}
          fontSize={0.8}
          color="#ff6600"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.entrepreneurship.companyName}
        </Text>
        
        <Text
          position={[0, 0.7, 0.2]}
          fontSize={0.5}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.entrepreneurship.position}
        </Text>
        
        <Text
          position={[0, 0.3, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.entrepreneurship.description}
        </Text>
        
        <Text
          position={[0, -0.3, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Light.woff"
        >
          Started in {portfolioData.entrepreneurship.startDate}
        </Text>
        
        <Text
          position={[0, -0.8, 0.2]}
          fontSize={0.35}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Regular.woff"
        >
          Team of 7 • International Clients • AR/VR Projects
        </Text>
      </group>
      
      {/* Orbiting Achievement Elements */}
      <group ref={orbitRef}>
        <Sphere position={[6, 0, 0]} args={[0.4, 16, 16]}>
          <meshStandardMaterial color="#ff6600" transparent opacity={0.8} />
        </Sphere>
        
        <Box position={[-6, 0, 0]} args={[0.6, 0.6, 0.6]}>
          <meshStandardMaterial color="#64ffda" transparent opacity={0.7} />
        </Box>
        
        <Box position={[0, 0, 6]} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color="#9c27b0" transparent opacity={0.6} />
        </Box>
        
        <Sphere position={[0, 0, -6]} args={[0.3, 16, 16]}>
          <meshStandardMaterial color="#4caf50" transparent opacity={0.8} />
        </Sphere>
      </group>
      
      {/* Country flags representation */}
      <Box position={[-10, 3, -2]} args={[0.8, 0.5, 0.1]}>
        <meshStandardMaterial color="#ff4444" transparent opacity={0.7} />
      </Box>
      
      <Box position={[10, 3, -2]} args={[0.8, 0.5, 0.1]}>
        <meshStandardMaterial color="#4444ff" transparent opacity={0.7} />
      </Box>
      
      <Box position={[-10, -3, -2]} args={[0.8, 0.5, 0.1]}>
        <meshStandardMaterial color="#44ff44" transparent opacity={0.7} />
      </Box>
      
      <Box position={[10, -3, -2]} args={[0.8, 0.5, 0.1]}>
        <meshStandardMaterial color="#ffff44" transparent opacity={0.7} />
      </Box>
    </group>
  );
};
