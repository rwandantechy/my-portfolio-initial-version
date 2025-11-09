import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Blogs(){
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Automata Theory: From DFA to Turing Machines',
      excerpt: 'A comprehensive guide to automata theory, exploring deterministic and non-deterministic finite automata, pushdown automata, and the foundations of computability.',
      date: 'Nov 5, 2025',
      readTime: '8 min read',
      tags: ['Theory of Computation', 'Automata', 'Computer Science'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable MERN Stack Applications',
      excerpt: 'Best practices for architecting production-ready full-stack applications with MongoDB, Express, React, and Node.js.',
      date: 'Oct 28, 2025',
      readTime: '12 min read',
      tags: ['Web Development', 'MERN', 'Full-Stack'],
      featured: true
    },
    {
      id: 3,
      title: 'Computational Complexity: P vs NP Problem',
      excerpt: 'Diving deep into one of computer science\'s greatest unsolved mysteries and its implications for algorithm design.',
      date: 'Oct 15, 2025',
      readTime: '10 min read',
      tags: ['Algorithms', 'Complexity Theory', 'Research'],
      featured: false
    }
  ];

  return (
    <section className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <h2>Blog & Research</h2>
        <p className="muted" style={{ fontSize: '1.1rem', maxWidth: 700, margin: '16px auto 0' }}>
          Exploring theory of computation, algorithms, and modern web development
        </p>
      </motion.div>

      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <motion.article 
            key={post.id}
            className="blog-card card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {post.featured && (
              <span className="blog-badge">⭐ Featured</span>
            )}
            
            <div className="blog-meta">
              <span>
                <FaCalendar style={{ marginRight: 6 }} />
                {post.date}
              </span>
              <span>
                <FaClock style={{ marginRight: 6 }} />
                {post.readTime}
              </span>
            </div>

            <h3>{post.title}</h3>
            <p className="muted">{post.excerpt}</p>

            <div className="blog-tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="blog-tag">{tag}</span>
              ))}
            </div>

            <Link to={`/blogs/${post.id}`} className="blog-link">
              Read More
              <FaArrowRight style={{ marginLeft: 8 }} />
            </Link>
          </motion.article>
        ))}
      </div>

      <motion.div 
        className="coming-soon-notice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="muted">
          📝 More articles coming soon! Stay tuned for deep dives into theory of computation, 
          algorithm design, and full-stack development best practices.
        </p>
      </motion.div>
    </section>
  )
}
