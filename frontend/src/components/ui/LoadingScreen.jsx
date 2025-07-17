import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo/Name */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                VIKRAMADITYA
              </h1>
              <p className="text-xl text-gray-300">
                Software Engineer & Entrepreneur
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              transition={{ duration: 0.8 }}
              className="relative h-2 bg-gray-700 rounded-full mx-auto mb-6"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              
              {/* Glowing effect */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-50 blur-sm"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Progress Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm tracking-wider"
            >
              {progress < 30 && "Initializing 3D Environment..."}
              {progress >= 30 && progress < 60 && "Loading Portfolio Data..."}
              {progress >= 60 && progress < 90 && "Preparing Experience..."}
              {progress >= 90 && "Ready to Launch!"}
            </motion.p>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;