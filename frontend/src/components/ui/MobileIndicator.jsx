import React from 'react';
import { motion } from 'framer-motion';

const MobileIndicator = ({ currentSection, totalSections }) => {
  const isLastSection = currentSection === totalSections - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
    >
      {!isLastSection && (
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <div className="text-sm font-medium">
            Swipe to navigate
          </div>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-12 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MobileIndicator;