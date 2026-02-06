import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaStar, FaBullseye, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function ProjectShowcase({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article 
      ref={ref}
      className="project-showcase card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Header */}
      <div className="project-showcase-header">
        <div className="project-header-content">
          <div className="project-title-content">
            <h3 className="project-title">{project.title}</h3>
            {project.featured && (
              <motion.span 
                className="featured-badge-inline"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FaStar />
                Featured
              </motion.span>
            )}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </div>

      {/* Metrics Section */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="project-metrics-grid">
          {project.metrics.map((metric, idx) => (
            <motion.div 
              key={idx} 
              className="metric-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
            >
              <div className="metric-content">
                <span className="metric-value-large gradient-text">{metric.value}</span>
                <span className="metric-label-large">{metric.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <div className="project-tech-section">
          <h4 className="section-label">Technologies Used</h4>
          <div className="tech-stack-modern">
            {project.tech.map((tech, idx) => (
              <motion.span 
                key={idx} 
                className="tech-badge-modern"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Expandable Details */}
      <motion.button 
        className="expand-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isExpanded ? (
          <>
            <FaChevronUp /> Hide Details
          </>
        ) : (
          <>
            <FaChevronDown /> View Challenges & Results
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="project-details-expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="details-grid">
              {project.challenges && project.challenges.length > 0 && (
                <motion.div 
                  className="detail-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="detail-header">
                    <FaBullseye className="detail-icon" />
                    <h4>Key Challenges</h4>
                  </div>
                  <ul className="detail-list">
                    {project.challenges.map((challenge, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.05 }}
                      >
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {project.solutions && project.solutions.length > 0 && (
                <motion.div 
                  className="detail-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="detail-header">
                    <FaLightbulb className="detail-icon" />
                    <h4>Solutions Implemented</h4>
                  </div>
                  <ul className="detail-list">
                    {project.solutions.map((solution, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.05 }}
                      >
                        {solution}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {project.results && project.results.length > 0 && (
                <motion.div 
                  className="detail-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="detail-header">
                    <FaChartLine className="detail-icon" />
                    <h4>Results & Impact</h4>
                  </div>
                  <ul className="detail-list">
                    {project.results.map((result, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + idx * 0.05 }}
                      >
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Action Links */}
            {project.links && (project.links.github || project.links.live) && (
              <motion.div 
                className="project-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.links.github && (
                  <motion.a 
                    href={project.links.github} 
                    className="btn-outline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a 
                    href={project.links.live} 
                    className="btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
