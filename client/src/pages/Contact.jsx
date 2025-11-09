import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Placeholder for backend integration
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <h2>Get In Touch</h2>
        <p className="muted" style={{ fontSize: '1.1rem', maxWidth: 600, margin: '16px auto 0' }}>
          Open to PhD opportunities, research collaborations, and challenging full-stack projects
        </p>
      </motion.div>

      <div className="contact-layout">
        {/* Contact Info */}
        <motion.div 
          className="contact-info-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Contact Information</h3>
          <div className="contact-items">
            <motion.div 
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:niyonzima@cua.edu">niyonzima@cua.edu</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+14106227477">+1 (410) 622-7477</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p className="muted">Washington, DC</p>
              </div>
            </motion.div>
          </div>

          <div className="social-links-contact">
            <h4>Connect With Me</h4>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <motion.a 
                href="https://linkedin.com/in/innocent-niyonzima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-contact"
                whileHover={{ y: -4 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/rwandantechy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-contact"
                whileHover={{ y: -4 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linktr.ee/Innocent.niyonzima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-contact"
                whileHover={{ y: -4 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="card contact-form-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                required
              />
            </div>

            <motion.button 
              type="submit" 
              className="btn"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : 'Send Message'}
            </motion.button>
            
            {status === 'sent' && (
              <motion.p 
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! (This is a placeholder)
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

