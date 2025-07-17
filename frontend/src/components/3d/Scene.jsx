import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { FloatingParticles } from './FloatingParticles';
import { HeroSection } from './HeroSection';
import { EducationSection } from './EducationSection';
import { EntrepreneurshipSection } from './EntrepreneurshipSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { AchievementsSection } from './AchievementsSection';
import { ContactSection } from './ContactSection';

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
        
        {currentSection === 0 && <HeroSection />}
        {currentSection === 1 && <EducationSection />}
        {currentSection === 2 && <EntrepreneurshipSection />}
        {currentSection === 3 && <ExperienceSection />}
        {currentSection === 4 && <ProjectsSection />}
        {currentSection === 5 && <SkillsSection />}
        {currentSection === 6 && <AchievementsSection />}
        {currentSection === 7 && <ContactSection />}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;