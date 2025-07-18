import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const RacingUI = ({ currentSection, carSpeed = 0, isRacing = false }) => {
  const [speed, setSpeed] = useState(0);
  const [gear, setGear] = useState(1);

  const sectionNames = [
    'START LINE',
    'EDUCATION ZONE',
    'ENTREPRENEUR ZONE',
    'EXPERIENCE ZONE',
    'PROJECTS ZONE',
    'SKILLS ZONE',
    'ACHIEVEMENTS ZONE',
    'CONTACT ZONE'
  ];

  useEffect(() => {
    setSpeed(Math.abs(carSpeed * 10));
    setGear(Math.min(Math.max(Math.floor(Math.abs(carSpeed * 2)) + 1, 1), 6));
  }, [carSpeed]);

  if (!isRacing) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        {/* Current Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/50"
        >
          <div className="text-cyan-400 text-sm font-mono">CURRENT ZONE</div>
          <div className="text-white text-lg font-bold">
            {sectionNames[currentSection]}
          </div>
        </motion.div>

        {/* Mini Map */}
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/50">
          <div className="text-cyan-400 text-sm font-mono mb-2">TRACK MAP</div>
          <div className="w-32 h-32 bg-gray-800 rounded relative">
            <div className="absolute inset-1 border border-gray-600 rounded">
              {/* Track sections as dots */}
              {sectionNames.map((_, index) => {
                const angle = (index / sectionNames.length) * 2 * Math.PI;
                const x = Math.cos(angle) * 40 + 50;
                const y = Math.sin(angle) * 40 + 50;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
                      index === currentSection ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        {/* Speedometer */}
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/50">
          <div className="text-cyan-400 text-sm font-mono">SPEED</div>
          <div className="text-white text-4xl font-bold font-mono">
            {speed.toFixed(0)}
          </div>
          <div className="text-gray-400 text-sm">KM/H</div>
        </div>

        {/* Gear Indicator */}
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/50">
          <div className="text-cyan-400 text-sm font-mono">GEAR</div>
          <div className="text-white text-4xl font-bold font-mono">
            {gear}
          </div>
        </div>

        {/* Controls Guide */}
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/50">
          <div className="text-cyan-400 text-sm font-mono mb-2">CONTROLS</div>
          <div className="text-white text-sm space-y-1">
            <div>↑ W - Accelerate</div>
            <div>↓ S - Brake</div>
            <div>← A - Turn Left</div>
            <div>→ D - Turn Right</div>
          </div>
        </div>
      </div>

      {/* Racing Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Speed lines effect */}
        {speed > 30 && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse" />
        )}
        
        {/* Checkpoint notification */}
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-6 border-2 border-cyan-400">
            <div className="text-cyan-400 text-lg font-bold text-center">
              ENTERING
            </div>
            <div className="text-white text-xl font-bold text-center">
              {sectionNames[currentSection]}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Racing Mode Indicator */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-2 border border-red-400">
          <div className="text-red-400 text-sm font-mono">RACING MODE</div>
          <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse mx-auto mt-1" />
        </div>
      </div>
    </div>
  );
};