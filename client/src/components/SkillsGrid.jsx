import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaCog, FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const iconMap = {
  'Languages': FaCode,
  'Frontend': FaPalette,
  'Backend': FaCog,
  'Databases': FaDatabase,
  'DevOps & Cloud': FaCloud,
  'Theory & Algorithms': FaBrain
};

const SkillCategory = ({ title, skills, icon, color, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const IconComponent = iconMap[title];
  
  return (
    <motion.div 
      ref={ref}
      className="skill-category"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="skill-category-header">
        <IconComponent className="skill-icon" style={{color, fontSize: '1.8rem'}} />
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {skills.map((skill, idx) => (
          <motion.span 
            key={idx} 
            className="skill-tag" 
            style={{'--skill-color': color}}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillsGrid() {
  const skillCategories = [
    {
      title: 'Languages',
      color: '#fd961a',
      skills: ['C#', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'PHP']
    },
    {
      title: 'Frontend',
      color: '#00d4ff',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'Redux']
    },
    {
      title: 'Backend',
      color: '#ff4d6d',
      skills: ['Node.js', 'ASP.NET Core', 'Express', 'Laravel', 'REST APIs']
    },
    {
      title: 'Databases',
      color: '#00d4ff',
      skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'DevOps & Cloud',
      color: '#fd961a',
      skills: ['Docker', 'Git', 'CI/CD', 'VPS', 'NGINX', 'PM2', 'Linux']
    },
    {
      title: 'Theory & Algorithms',
      color: '#ff4d6d',
      skills: ['Automata Theory', 'Data Structures', 'Algorithms', 'OOP', 'Design Patterns']
    }
  ];

  return (
    <div className="skills-grid">
      {skillCategories.map((category, idx) => (
        <SkillCategory key={idx} {...category} index={idx} />
      ))}
    </div>
  );
}
