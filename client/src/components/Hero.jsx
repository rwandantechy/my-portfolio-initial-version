import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaServer } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="hero hd-shell">
      <div className="container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hd-badge" variants={itemVariants}>
            <FaServer />
            Backend APIs and infrastructure
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="hero__title">
              I build backend systems that stay reliable in production.
            </h1>
          </motion.div>
          
          <motion.p 
            className="hero__subtitle"
            variants={itemVariants}
          >
            I work on backend APIs, deployments, and day-to-day reliability.  
            That includes fixing issues in production, improving stability, and keeping services running well.
          </motion.p>
          
          <motion.div 
            className="hero__cta"
            variants={itemVariants}
          >
            <Link to="/projects" className="btn btn-primary">
              <FaRocket style={{ marginRight: 8 }} />
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <FaBolt style={{ marginRight: 8 }} />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
