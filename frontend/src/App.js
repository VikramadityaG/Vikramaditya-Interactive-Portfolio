import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from './components/3d/Scene';

import HtmlOverlay from './components/HtmlOverlay';
import LoadingScreen from './components/ui/LoadingScreen';
import SectionIndicator from './components/ui/SectionIndicator';
import ScrollIndicator from './components/ui/ScrollIndicator';
import MobileIndicator from './components/ui/MobileIndicator';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isScrolling) return;

      if (isLeftSwipe && currentSection < totalSections - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
      
      if (isRightSwipe && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, touchStart, touchEnd]);

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
          

          
          {/* Section Indicator */}
          <SectionIndicator currentSection={currentSection} />
          
          {/* Scroll Indicator */}
          <ScrollIndicator 
            currentSection={currentSection} 
            totalSections={totalSections} 
          />
          
          {/* Mobile Indicator */}
          <MobileIndicator 
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