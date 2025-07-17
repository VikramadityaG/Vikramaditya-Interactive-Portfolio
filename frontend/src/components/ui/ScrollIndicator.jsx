import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = ({ currentSection, totalSections }) => {
  const isLastSection = currentSection === totalSections - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
    >
      {!isLastSection && (
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <div className="text-sm font-medium">
            Scroll to explore
          </div>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mx-auto"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ScrollIndicator;