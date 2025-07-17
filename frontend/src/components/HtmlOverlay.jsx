import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const HtmlOverlay = ({ currentSection }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExperience = (expId) => {
    setExpandedExperience(expandedExperience === expId ? null : expId);
  };

  const renderContent = () => {
    switch(currentSection) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-2">
              {portfolioData.personal.title}
            </h2>
            <p className="text-xl text-gray-300">
              {portfolioData.personal.tagline}
            </p>
          </div>
        );
      
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">EDUCATION</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{edu.institution}</h3>
                  <p className="text-white mb-2">{edu.degree}</p>
                  <p className="text-gray-300 text-sm mb-2">{edu.duration}</p>
                  <p className="text-orange-400 font-semibold">GPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">ENTREPRENEURSHIP</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                {portfolioData.entrepreneurship.companyName}
              </h3>
              <p className="text-cyan-400 text-lg mb-4">{portfolioData.entrepreneurship.position}</p>
              <p className="text-white mb-4">{portfolioData.entrepreneurship.description}</p>
              <p className="text-gray-300 mb-4">Started: {portfolioData.entrepreneurship.startDate}</p>
              <div className="space-y-2">
                {portfolioData.entrepreneurship.achievements.map((achievement, index) => (
                  <p key={index} className="text-gray-300">• {achievement}</p>
                ))}
              </div>
            </motion.div>
          </div>
        );
      
      case 3:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">PROFESSIONAL EXPERIENCE</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 cursor-pointer hover:bg-gray-700/80 transition-colors"
                  onClick={() => toggleExperience(exp.id)}
                >
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{exp.company}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{exp.position}</p>
                  <p className="text-gray-300 text-sm mb-3">{exp.duration} • {exp.location}</p>
                  {exp.product && (
                    <p className="text-purple-400 font-medium mb-3">Product: {exp.product}</p>
                  )}
                  
                  <div className="text-left">
                    <p className="text-white mb-2">{exp.responsibilities[0]}</p>
                    
                    {expandedExperience === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mt-3"
                      >
                        {exp.responsibilities.slice(1).map((responsibility, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">• {responsibility}</p>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="text-right mt-3">
                    <span className="text-cyan-400 text-sm">
                      {expandedExperience === exp.id ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {portfolioData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-orange-400 mb-3">{project.name}</h3>
                  <p className="text-white mb-3">{project.description}</p>
                  <p className="text-cyan-400 text-sm mb-3">{project.technologies.join(" • ")}</p>
                  <div className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <p key={idx} className="text-gray-300 text-sm">• {achievement}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">SKILLS & EXPERTISE</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-orange-400 mb-3">EXPERTISE</h3>
                <div className="space-y-2">
                  {portfolioData.skills.expertise.slice(0, 3).map((skill, idx) => (
                    <p key={idx} className="text-white text-sm">{skill}</p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-3">LANGUAGES</h3>
                <div className="space-y-2">
                  {portfolioData.skills.languages.slice(0, 4).map((lang, idx) => (
                    <p key={idx} className="text-white text-sm">{lang}</p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-3">CLOUD</h3>
                <div className="space-y-2">
                  {portfolioData.skills.cloudPlatforms.map((platform, idx) => (
                    <p key={idx} className="text-white text-sm">{platform}</p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-green-400 mb-3">DATABASES</h3>
                <div className="space-y-2">
                  {portfolioData.skills.databases.map((db, idx) => (
                    <p key={idx} className="text-white text-sm">{db}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">ACHIEVEMENTS</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {portfolioData.achievements.slice(0, 4).map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-lg font-bold text-orange-400 mb-2">{achievement.title}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{achievement.category}</p>
                  <p className="text-white text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">GET IN TOUCH</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                {portfolioData.personal.name}
              </h3>
              <p className="text-cyan-400 text-lg mb-6">{portfolioData.personal.title}</p>
              
              <div className="space-y-3 text-white">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-cyan-400 font-semibold">Email:</span> {portfolioData.personal.email}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-cyan-400 font-semibold">Phone:</span> {portfolioData.personal.phone}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-cyan-400 font-semibold">LinkedIn:</span> {portfolioData.personal.linkedin}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-cyan-400 font-semibold">GitHub:</span> {portfolioData.personal.github}
                </p>
              </div>
              
              <div className="mt-8 bg-gray-700/50 rounded-xl p-4">
                <p className="text-cyan-400 font-semibold mb-2">Thank you for exploring my portfolio!</p>
                <p className="text-gray-300">Let's build something amazing together</p>
              </div>
            </motion.div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 p-6 pointer-events-none">
      <div className="max-w-7xl w-full pointer-events-auto">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default HtmlOverlay;