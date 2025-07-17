import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';

export const AchievementsSection = () => {
  const groupRef = useRef();
  const trophyRef = useRef();
  const achievementRefs = useRef([]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (trophyRef.current) {
      trophyRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      trophyRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    
    achievementRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.position.y = Math.sin(state.clock.elapsedTime * 1.5 + index * 0.5) * 0.2;
        ref.rotation.z = Math.sin(state.clock.elapsedTime * 1.2 + index * 0.3) * 0.05;
      }
    });
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
        ACHIEVEMENTS
      </Text>
      
      {/* Central Trophy */}
      <group ref={trophyRef} position={[0, 3, 0]}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="#ffd700" transparent opacity={0.8} />
        </Sphere>
        
        <Text
          position={[0, 0, 0]}
          fontSize={0.4}
          color="#1a1a2e"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          🏆
        </Text>
      </group>
      
      {/* Achievement Cards */}
      {portfolioData.achievements.slice(0, 4).map((achievement, index) => {
        const angle = (index / 4) * Math.PI * 2;
        const radius = 6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group 
            key={achievement.id} 
            position={[x, 0, z]}
            ref={(el) => achievementRefs.current[index] = el}
          >
            <Box args={[3.5, 2.5, 0.3]}>
              <meshStandardMaterial color="#1a1a2e" transparent opacity={0.9} />
            </Box>
            
            <Text
              position={[0, 0.7, 0.2]}
              fontSize={0.4}
              color="#ff6600"
              anchorX="center"
              anchorY="middle"
              maxWidth={3}
              font="/fonts/Inter-Bold.woff"
            >
              {achievement.title}
            </Text>
            
            <Text
              position={[0, 0.2, 0.2]}
              fontSize={0.3}
              color="#64ffda"
              anchorX="center"
              anchorY="middle"
              maxWidth={3}
              font="/fonts/Inter-Regular.woff"
            >
              {achievement.category}
            </Text>
            
            <Text
              position={[0, -0.3, 0.2]}
              fontSize={0.25}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              maxWidth={3}
              font="/fonts/Inter-Light.woff"
            >
              {achievement.description}
            </Text>
          </group>
        );
      })}
      
      {/* Special Achievement Highlights */}
      <group position={[0, -3, 0]}>
        <Box args={[12, 1.5, 0.2]}>
          <meshStandardMaterial color="#16213e" transparent opacity={0.9} />
        </Box>
        
        <Text
          position={[0, 0.3, 0.2]}
          fontSize={0.5}
          color="#64ffda"
          anchorX="center"
          anchorY="middle"
          maxWidth={11}
          font="/fonts/Inter-Bold.woff"
        >
          SPECIAL MENTIONS
        </Text>
        
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={11}
          font="/fonts/Inter-Regular.woff"
        >
          100+ Students Taught • VR Tech Demos • 40,000+ Event Attendees
        </Text>
      </group>
      
      {/* Decorative elements */}
      <Sphere position={[8, 4, -2]} args={[0.3, 16, 16]}>
        <meshStandardMaterial color="#ffd700" transparent opacity={0.6} />
      </Sphere>
      
      <Box position={[-8, 4, -2]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#ff6600" transparent opacity={0.7} />
      </Box>
      
      <Sphere position={[8, -4, -2]} args={[0.25, 16, 16]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.6} />
      </Sphere>
      
      <Box position={[-8, -4, -2]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.7} />
      </Box>
    </group>
  );
};