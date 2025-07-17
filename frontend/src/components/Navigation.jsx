import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = [
    { id: 0, name: 'Home', icon: '🏠' },
    { id: 1, name: 'Education', icon: '🎓' },
    { id: 2, name: 'Entrepreneurship', icon: '🚀' },
    { id: 3, name: 'Experience', icon: '💼' },
    { id: 4, name: 'Projects', icon: '🛠️' },
    { id: 5, name: 'Skills', icon: '⚡' },
    { id: 6, name: 'Achievements', icon: '🏆' },
    { id: 7, name: 'Contact', icon: '📧' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-700">
        <div className="space-y-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative ${
                currentSection === section.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{section.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute left-16 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {section.name}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800"></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;