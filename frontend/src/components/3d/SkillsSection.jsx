import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const SkillsSection = () => {
  const groupRef = useRef();
  const skillsOrbitRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (skillsOrbitRef.current) {
      skillsOrbitRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const skillCategories = [
    { name: "EXPERTISE", items: portfolioData.skills.expertise, color: "#ff6600" },
    { name: "LANGUAGES", items: portfolioData.skills.languages, color: "#64ffda" },
    { name: "CLOUD", items: portfolioData.skills.cloudPlatforms, color: "#9c27b0" },
    { name: "DATABASES", items: portfolioData.skills.databases, color: "#4caf50" }
  ];

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
        SKILLS & EXPERTISE
      </Text>
      
      {/* Central Skills Hub */}
      <Sphere position={[0, 0, 0]} args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.8} />
      </Sphere>
      
      <Text
        position={[0, 0, 0]}
        fontSize={0.8}
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        SKILLS
      </Text>
      
      {/* Orbiting Skill Categories */}
      <group ref={skillsOrbitRef}>
        {skillCategories.map((category, index) => {
          const angle = (index / skillCategories.length) * Math.PI * 2;
          const radius = 8;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <group key={category.name} position={[x, 0, z]}>
              <Box args={[3, 2, 0.3]}>
                <meshStandardMaterial color="#1a1a2e" transparent opacity={0.9} />
              </Box>
              
              <Text
                position={[0, 0.5, 0.2]}
                fontSize={0.4}
                color={category.color}
                anchorX="center"
                anchorY="middle"
                maxWidth={2.5}
                font="/fonts/Inter-Bold.woff"
              >
                {category.name}
              </Text>
              
              <Text
                position={[0, -0.2, 0.2]}
                fontSize={0.25}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                maxWidth={2.5}
                font="/fonts/Inter-Regular.woff"
              >
                {category.items.slice(0, 3).join("\n")}
              </Text>
            </group>
          );
        })}
      </group>
      
      {/* Floating skill indicators */}
      <Sphere position={[5, 3, 2]} args={[0.3, 16, 16]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.8} />
      </Sphere>
      
      <Box position={[-5, 3, 2]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.7} />
      </Box>
      
      <Sphere position={[3, -3, -2]} args={[0.25, 16, 16]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.8} />
      </Sphere>
      
      <Box position={[-3, -3, -2]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#4caf50" transparent opacity={0.7} />
      </Box>
      
      {/* Certification indicators */}
      <Box position={[0, 4, -3]} args={[1, 0.6, 0.1]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.8} />
      </Box>
      
      <Text
        position={[0, 4, -2.8]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        AWS CERTIFIED
      </Text>
      
      <Box position={[0, 3, -3]} args={[1, 0.6, 0.1]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.8} />
      </Box>
      
      <Text
        position={[0, 3, -2.8]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        AZURE CERTIFIED
      </Text>
    </group>
  );
};