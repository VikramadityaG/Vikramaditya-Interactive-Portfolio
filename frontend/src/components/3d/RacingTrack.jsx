import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { Box, Plane, Text } from '@react-three/drei';

export const RacingTrack = ({ currentSection, onSectionChange }) => {
  const trackRef = useRef();

  // Track sections for different portfolio areas
  const trackSections = [
    { name: 'START', position: [0, 0, 0], color: '#64ffda', section: 0 },
    { name: 'EDUCATION', position: [0, 0, -20], color: '#ff6600', section: 1 },
    { name: 'ENTREPRENEUR', position: [20, 0, -20], color: '#9c27b0', section: 2 },
    { name: 'EXPERIENCE', position: [20, 0, 0], color: '#4caf50', section: 3 },
    { name: 'PROJECTS', position: [20, 0, 20], color: '#2196f3', section: 4 },
    { name: 'SKILLS', position: [0, 0, 20], color: '#ff9800', section: 5 },
    { name: 'ACHIEVEMENTS', position: [-20, 0, 20], color: '#ffd700', section: 6 },
    { name: 'CONTACT', position: [-20, 0, 0], color: '#64ffda', section: 7 },
  ];

  // Create physical track ground
  const [trackGround] = useBox(() => ({
    position: [0, -0.5, 0],
    args: [100, 1, 100],
    type: 'Static',
    material: { friction: 0.3, restitution: 0.1 },
  }));

  // Create checkpoints for each section
  const checkpoints = trackSections.map((section, index) => {
    const [checkpoint] = useBox(() => ({
      position: [section.position[0], 0.5, section.position[2]],
      args: [4, 2, 4],
      isTrigger: true,
      onCollideBegin: () => {
        if (currentSection !== section.section) {
          onSectionChange(section.section);
        }
      },
    }));

    return checkpoint;
  });

  useFrame(() => {
    // Add any track animations here
  });

  return (
    <group ref={trackRef}>
      {/* Main Track Ground */}
      <Box ref={trackGround} args={[100, 1, 100]}>
        <meshStandardMaterial color="#333333" />
      </Box>

      {/* Track Markings */}
      <Plane position={[0, 0.01, 0]} args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#444444" />
      </Plane>

      {/* Section Checkpoints */}
      {trackSections.map((section, index) => (
        <group key={index}>
          {/* Checkpoint Platform */}
          <Box position={[section.position[0], 0.1, section.position[2]]} args={[6, 0.2, 6]}>
            <meshStandardMaterial color={section.color} transparent opacity={0.6} />
          </Box>

          {/* Section Label */}
          <Text
            position={[section.position[0], 2, section.position[2]]}
            fontSize={2}
            color={section.color}
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, 0]}
          >
            {section.name}
          </Text>

          {/* Checkpoint Marker */}
          <Box position={[section.position[0], 1, section.position[2]]} args={[0.5, 2, 0.5]}>
            <meshStandardMaterial color={section.color} transparent opacity={0.8} />
          </Box>

          {/* Glowing Effect */}
          <Box 
            position={[section.position[0], 0.3, section.position[2]]} 
            args={[8, 0.1, 8]}
          >
            <meshStandardMaterial 
              color={section.color} 
              transparent 
              opacity={currentSection === section.section ? 0.3 : 0.1}
              emissive={section.color}
              emissiveIntensity={currentSection === section.section ? 0.2 : 0.05}
            />
          </Box>
        </group>
      ))}

      {/* Track Borders */}
      <Box position={[50, 1, 0]} args={[2, 2, 100]}>
        <meshStandardMaterial color="#FF0000" />
      </Box>
      <Box position={[-50, 1, 0]} args={[2, 2, 100]}>
        <meshStandardMaterial color="#FF0000" />
      </Box>
      <Box position={[0, 1, 50]} args={[100, 2, 2]}>
        <meshStandardMaterial color="#FF0000" />
      </Box>
      <Box position={[0, 1, -50]} args={[100, 2, 2]}>
        <meshStandardMaterial color="#FF0000" />
      </Box>

      {/* Racing Track Lines */}
      <Plane position={[0, 0.02, 0]} args={[2, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Plane>
      <Plane position={[0, 0.02, 0]} args={[100, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Plane>

      {/* Starting Line */}
      <Plane position={[0, 0.03, 2]} args={[8, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Plane>
      <Plane position={[0, 0.03, -2]} args={[8, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Plane>
    </group>
  );
};