import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection = () => {
  const groupRef = useRef();
  const contactCardRef = useRef();
  const socialOrbitRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (contactCardRef.current) {
      contactCardRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      contactCardRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
    }
    if (socialOrbitRef.current) {
      socialOrbitRef.current.rotation.y = state.clock.elapsedTime * 0.3;
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
        GET IN TOUCH
      </Text>
      
      {/* Main Contact Card */}
      <group ref={contactCardRef} position={[0, 1, 0]}>
        <RoundedBox args={[10, 4, 0.3]} radius={0.1}>
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.95} />
        </RoundedBox>
        
        <Text
          position={[0, 1.3, 0.2]}
          fontSize={0.8}
          color="#ff6600"
          anchorX="center"
          anchorY="middle"
          maxWidth={9}
          font="/fonts/Inter-Bold.woff"
        >
          {portfolioData.personal.name}
        </Text>
        
        <Text
          position={[0, 0.7, 0.2]}
          fontSize={0.5}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={9}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.personal.title}
        </Text>
        
        <Text
          position={[0, 0.2, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={9}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.personal.email}
        </Text>
        
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={9}
          font="/fonts/Inter-Regular.woff"
        >
          {portfolioData.personal.phone}
        </Text>
        
        <Text
          position={[0, -0.6, 0.2]}
          fontSize={0.35}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={9}
          font="/fonts/Inter-Light.woff"
        >
          {portfolioData.personal.linkedin}
        </Text>
        
        <Text
          position={[0, -1.0, 0.2]}
          fontSize={0.35}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          maxWidth={9}
          font="/fonts/Inter-Light.woff"
        >
          {portfolioData.personal.github}
        </Text>
      </group>
      
      {/* Orbiting Social Elements */}
      <group ref={socialOrbitRef}>
        <Box position={[7, 0, 0]} args={[1, 1, 0.2]}>
          <meshStandardMaterial color="#0077b5" transparent opacity={0.8} />
        </Box>
        
        <Text
          position={[7, 0, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          IN
        </Text>
        
        <Box position={[-7, 0, 0]} args={[1, 1, 0.2]}>
          <meshStandardMaterial color="#333333" transparent opacity={0.8} />
        </Box>
        
        <Text
          position={[-7, 0, 0.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          GH
        </Text>
        
        <Box position={[0, 0, 7]} args={[1, 1, 0.2]}>
          <meshStandardMaterial color="#ff6600" transparent opacity={0.8} />
        </Box>
        
        <Text
          position={[0, 0, 7.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          📧
        </Text>
        
        <Box position={[0, 0, -7]} args={[1, 1, 0.2]}>
          <meshStandardMaterial color="#64ffda" transparent opacity={0.8} />
        </Box>
        
        <Text
          position={[0, 0, -6.8]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          📱
        </Text>
      </group>
      
      {/* Thank you message */}
      <group position={[0, -4, 0]}>
        <RoundedBox args={[8, 1.5, 0.2]} radius={0.1}>
          <meshStandardMaterial color="#16213e" transparent opacity={0.9} />
        </RoundedBox>
        
        <Text
          position={[0, 0.2, 0.2]}
          fontSize={0.5}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Bold.woff"
        >
          Thank you for exploring my portfolio!
        </Text>
        
        <Text
          position={[0, -0.3, 0.2]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={7}
          font="/fonts/Inter-Regular.woff"
        >
          Let's build something amazing together
        </Text>
      </group>
      
      {/* Decorative elements */}
      <Box position={[12, 3, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.7} />
      </Box>
      
      <Box position={[-12, 3, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.7} />
      </Box>
      
      <Box position={[12, -3, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.7} />
      </Box>
      
      <Box position={[-12, -3, -2]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#4caf50" transparent opacity={0.7} />
      </Box>
    </group>
  );
};
