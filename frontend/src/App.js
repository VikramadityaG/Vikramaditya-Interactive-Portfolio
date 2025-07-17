import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from './components/3d/Scene';

import HtmlOverlay from './components/HtmlOverlay';
import LoadingScreen from './components/ui/LoadingScreen';
import SectionIndicator from './components/ui/SectionIndicator';
import ScrollIndicator from './components/ui/ScrollIndicator';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const totalSections = 8;

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 3D Scene */}
          <Scene currentSection={currentSection} />
          
          {/* HTML Content Overlay */}
          <HtmlOverlay currentSection={currentSection} />
          
          {/* Navigation */}
          <Navigation 
            currentSection={currentSection} 
            setCurrentSection={setCurrentSection} 
          />
          
          {/* Section Indicator */}
          <SectionIndicator currentSection={currentSection} />
          
          {/* Scroll Indicator */}
          <ScrollIndicator 
            currentSection={currentSection} 
            totalSections={totalSections} 
          />
          
          {/* Background Gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black -z-10"
          />
          
          {/* Ambient Lighting Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 bg-gradient-to-t from-transparent via-cyan-900/10 to-transparent -z-10"
          />
        </>
      )}
    </div>
  );
};

export default App;