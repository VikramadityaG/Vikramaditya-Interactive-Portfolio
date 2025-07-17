import React from 'react';
import { motion } from 'framer-motion';

const SectionIndicator = ({ currentSection }) => {
  const sections = [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Education' },
    { id: 2, name: 'Entrepreneurship' },
    { id: 3, name: 'Experience' },
    { id: 4, name: 'Projects' },
    { id: 5, name: 'Skills' },
    { id: 6, name: 'Achievements' },
    { id: 7, name: 'Contact' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-2xl border border-gray-700">
        <div className="flex items-center space-x-4">
          {/* Section Counter */}
          <div className="text-cyan-400 font-bold text-sm">
            {String(currentSection + 1).padStart(2, '0')}
          </div>
          
          {/* Divider */}
          <div className="w-px h-6 bg-gray-600"></div>
          
          {/* Section Name */}
          <div className="text-white font-medium text-sm">
            {sections[currentSection]?.name}
          </div>
          
          {/* Progress Dots */}
          <div className="flex space-x-1 ml-4">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-cyan-400 w-6'
                    : index < currentSection
                    ? 'bg-gray-500'
                    : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionIndicator;