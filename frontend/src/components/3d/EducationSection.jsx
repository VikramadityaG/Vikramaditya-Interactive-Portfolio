import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const EducationSection = () => {
  const groupRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    if (card1Ref.current) {
      card1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
      card1Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
    if (card2Ref.current) {
      card2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 2 + Math.PI) * 0.2;
      card2Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5 + Math.PI) * 0.1;
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
      >
        EDUCATION
      </Text>
      
      {/* Masters Card */}
      <group ref={card1Ref} position={[-4, 1, 0]}>
        <RoundedBox args={[6, 3, 0.2]} radius={0.1}>
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.9} />
        </RoundedBox>
        
        <Text
          position={[0, 0.8, 0.2]}
          fontSize={0.6}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.education[0].institution}
        </Text>
        
        <Text
          position={[0, 0.2, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.education[0].degree}
        </Text>
        
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Light.woff"
        >
          {portfolioData.education[0].duration}
        </Text>
        
        <Text
          position={[0, -0.6, 0.2]}
          fontSize={0.4}
          color="#ff6600"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Bold.woff"
        >
          GPA: {portfolioData.education[0].gpa}
        </Text>
      </group>
      
      {/* Bachelors Card */}
      <group ref={card2Ref} position={[4, 1, 0]}>
        <RoundedBox args={[6, 3, 0.2]} radius={0.1}>
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.9} />
        </RoundedBox>
        
        <Text
          position={[0, 0.8, 0.2]}
          fontSize={0.6}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.education[1].institution}
        </Text>
        
        <Text
          position={[0, 0.2, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.education[1].degree}
        </Text>
        
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.3}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Light.woff"
        >
          {portfolioData.education[1].duration}
        </Text>
        
        <Text
          position={[0, -0.6, 0.2]}
          fontSize={0.4}
          color="#ff6600"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          font="/fonts/Inter-Bold.woff"
        >
          GPA: {portfolioData.education[1].gpa}
        </Text>
      </group>
      
      {/* Decorative elements */}
      <Box position={[0, -3, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.6} />
      </Box>
      
      <Box position={[-7, 2, -1]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.7} />
      </Box>
      
      <Box position={[7, 2, -1]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.7} />
      </Box>
    </group>
  );
};