import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { FloatingParticles } from './FloatingParticles';
import { BackgroundEffects } from './BackgroundEffects';
import { F1Car } from './F1Car';
import { RacingTrack } from './RacingTrack';
import { RacingCamera } from './RacingCamera';

const Scene = ({ currentSection, onSectionChange, isRacingMode = true }) => {
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0, z: 0 });
  const [carSpeed, setCarSpeed] = useState(0);

  const handleCarPositionChange = (position) => {
    setCarPosition(position);
  };

  return (
    <Canvas
      camera={{ 
        position: isRacingMode ? [0, 15, 5] : [0, 0, 20], 
        fov: 60,
        near: 0.1,
        far: 1000
      }}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#0066ff" intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff6600" intensity={0.3} />
        
        {isRacingMode ? (
          <Physics gravity={[0, -9.82, 0]} defaultContactMaterial={{ friction: 0.4, restitution: 0.3 }}>
            <RacingTrack 
              currentSection={currentSection} 
              onSectionChange={onSectionChange}
            />
            <F1Car 
              position={[0, 2, 0]} 
              onPositionChange={handleCarPositionChange}
              onSectionChange={onSectionChange}
              currentSection={currentSection}
            />
            <RacingCamera 
              carPosition={carPosition} 
              isActive={isRacingMode}
            />
          </Physics>
        ) : (
          <>
            <FloatingParticles />
            <BackgroundEffects currentSection={currentSection} />
            
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableDamping={true}
              dampingFactor={0.05}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
          </>
        )}
      </Suspense>
    </Canvas>
  );
};

export default Scene;