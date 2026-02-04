import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaUsers } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaCode style={{ marginRight: 8 }} />
          Available for Full-Stack & Backend Development Roles
        </motion.div>
        
        <motion.h1 
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I'm <span className="gradient-text">Innocent Niyonzima</span>
        </motion.h1>
        
        <motion.p 
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-stack developer specializing in MERN and .NET Core. 
          Building scalable systems with proven impact and technical excellence.
        </motion.p>
        
        <motion.div 
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/projects" className="btn">
            <FaRocket style={{ marginRight: 8 }} />
            View Projects
          </Link>
          <Link to="/contact" className="btn-outline">
            <FaCode style={{ marginRight: 8 }} />
            Get in Touch
          </Link>
        </motion.div>
        
        <motion.div 
          className="hero__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUsers className="stat-icon" />
            <div className="stat__number">40K+</div>
            <div className="stat__label">Active Users</div>
          </motion.div>
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="stat-icon" />
            <div className="stat__number">+25%</div>
            <div className="stat__label">Performance Gains</div>
          </motion.div>
          <motion.div 
            className="stat"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCode className="stat-icon" />
            <div className="stat__number">5+</div>
            <div className="stat__label">Major Projects</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
