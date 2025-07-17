import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { FloatingParticles } from './FloatingParticles';
import { BackgroundEffects } from './BackgroundEffects';

const Scene = ({ currentSection }) => {
  return (
    <Canvas
      camera={{ 
        position: [0, 0, 20], 
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
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#0066ff" intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff6600" intensity={0.3} />
        
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
      </Suspense>
    </Canvas>
  );
};

export default Scene;