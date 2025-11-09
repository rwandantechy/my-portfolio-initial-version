import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaBriefcase, FaDatabase, FaBolt, FaCheckCircle, FaClock } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const iconMap = {
  'graduation': FaGraduationCap,
  'trophy': FaTrophy,
  'briefcase': FaBriefcase,
  'database': FaDatabase,
  'bolt': FaBolt
};

export default function CertificationCard({ title, issuer, date, iconType, status, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const IconComponent = iconMap[iconType] || FaGraduationCap;
  
  return (
    <motion.div 
      ref={ref}
      className="certification-card"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <IconComponent className="cert-icon" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }} />
      <div className="cert-content">
        <h4>{title}</h4>
        <p className="cert-issuer">{issuer}</p>
        <div className="cert-footer">
          <span className="cert-date">{date}</span>
          {status === 'ongoing' && (
            <motion.span 
              className="cert-badge cert-badge-ongoing"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaClock style={{ marginRight: 4, fontSize: '0.7rem' }} />
              Ongoing
            </motion.span>
          )}
          {status === 'completed' && (
            <span className="cert-badge cert-badge-completed">
              <FaCheckCircle style={{ marginRight: 4, fontSize: '0.7rem' }} />
              Completed
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
