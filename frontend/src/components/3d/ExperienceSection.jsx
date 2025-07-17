import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const ExperienceSection = () => {
  const groupRef = useRef();
  const timelineRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    if (timelineRef.current) {
      timelineRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Section Title */}
      <Text
        position={[0, 7, 0]}
        fontSize={2.5}
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        PROFESSIONAL EXPERIENCE
      </Text>
      
      {/* Timeline */}
      <group ref={timelineRef}>
        {portfolioData.experience.map((exp, index) => (
          <group key={exp.id} position={[0, 4 - index * 2.5, 0]}>
            <RoundedBox args={[10, 2, 0.2]} radius={0.1}>
              <meshStandardMaterial 
                color={index === 0 ? "#1a1a2e" : "#16213e"} 
                transparent 
                opacity={0.9} 
              />
            </RoundedBox>
            
            <Text
              position={[0, 0.6, 0.2]}
              fontSize={0.6}
              color="#ff6600"
              anchorX="center"
              anchorY="middle"
              maxWidth={9}
              font="/fonts/Inter-Bold.woff"
            >
              {exp.company}
            </Text>
            
            <Text
              position={[0, 0.2, 0.2]}
              fontSize={0.4}
              color="#64ffda"
              anchorX="center"
              anchorY="middle"
              maxWidth={9}
              font="/fonts/Inter-Bold.woff"
            >
              {exp.position}
            </Text>
            
            <Text
              position={[0, -0.2, 0.2]}
              fontSize={0.3}
              color="#aaaaaa"
              anchorX="center"
              anchorY="middle"
              maxWidth={9}
              font="/fonts/Inter-Light.woff"
            >
              {exp.duration} • {exp.location}
            </Text>
            
            <Text
              position={[0, -0.6, 0.2]}
              fontSize={0.3}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              maxWidth={9}
              font="/fonts/Inter-Regular.woff"
            >
              {exp.responsibilities[0]}
            </Text>
          </group>
        ))}
      </group>
      
      {/* Timeline connectors */}
      <Box position={[0, 3, -1]} args={[0.1, 8, 0.1]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.6} />
      </Box>
      
      {/* Decorative elements */}
      <Box position={[-12, 2, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.7} />
      </Box>
      
      <Box position={[12, 0, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.7} />
      </Box>
      
      <Box position={[-12, -2, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.7} />
      </Box>
    </group>
  );
};