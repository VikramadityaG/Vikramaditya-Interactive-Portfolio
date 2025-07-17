import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const ProjectsSection = () => {
  const groupRef = useRef();
  const project1Ref = useRef();
  const project2Ref = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (project1Ref.current) {
      project1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      project1Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    }
    if (project2Ref.current) {
      project2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 2 + Math.PI) * 0.3;
      project2Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2 + Math.PI) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Section Title */}
      <Text
        position={[0, 5, 0]}
        fontSize={2.5}
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        PROJECTS
      </Text>
      
      {/* QEats Project */}
      <group ref={project1Ref} position={[-4, 1, 0]}>
        <RoundedBox args={[7, 3.5, 0.3]} radius={0.1}>
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.95} />
        </RoundedBox>
        
        <Text
          position={[0, 1.2, 0.2]}
          fontSize={0.7}
          color="#ff6600"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.projects[0].name}
        </Text>
        
        <Text
          position={[0, 0.6, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.projects[0].description}
        </Text>
        
        <Text
          position={[0, 0.1, 0.2]}
          fontSize={0.3}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Light.woff"
        >
          {portfolioData.projects[0].technologies.join(" • ")}
        </Text>
        
        <Text
          position={[0, -0.4, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.projects[0].achievements[0]}
        </Text>
        
        <Text
          position={[0, -0.8, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.projects[0].achievements[1]}
        </Text>
      </group>
      
      {/* QMoney Project */}
      <group ref={project2Ref} position={[4, 1, 0]}>
        <RoundedBox args={[7, 3.5, 0.3]} radius={0.1}>
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.95} />
        </RoundedBox>
        
        <Text
          position={[0, 1.2, 0.2]}
          fontSize={0.7}
          color="#ff6600"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.projects[1].name}
        </Text>
        
        <Text
          position={[0, 0.6, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.projects[1].description}
        </Text>
        
        <Text
          position={[0, 0.1, 0.2]}
          fontSize={0.3}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Light.woff"
        >
          {portfolioData.projects[1].technologies.join(" • ")}
        </Text>
        
        <Text
          position={[0, -0.4, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.projects[1].achievements[0]}
        </Text>
        
        <Text
          position={[0, -0.8, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.projects[1].achievements[1]}
        </Text>
      </group>
      
      {/* Decorative coding elements */}
      <Box position={[-10, 3, -2]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#4caf50" transparent opacity={0.8} />
      </Box>
      
      <Box position={[10, 3, -2]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#2196f3" transparent opacity={0.8} />
      </Box>
      
      <Box position={[0, -3, -3]} args={[0.6, 0.6, 0.6]}>
        <meshStandardMaterial color="#ff9800" transparent opacity={0.7} />
      </Box>
      
      <Box position={[-8, -2, -1]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#e91e63" transparent opacity={0.6} />
      </Box>
      
      <Box position={[8, -2, -1]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#673ab7" transparent opacity={0.6} />
      </Box>
    </group>
  );
};