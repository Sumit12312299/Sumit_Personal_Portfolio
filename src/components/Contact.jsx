import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <motion.div 
          className="grid-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's talk about your next project.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)' }}>Email</h4>
                  <a href="mailto:contact@sumitkumar.dev" style={{ fontSize: '1.1rem', fontWeight: 500 }}>contact@sumitkumar.dev</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)' }}>Phone</h4>
                  <a href="tel:+919876543210" style={{ fontSize: '1.1rem', fontWeight: 500 }}>+91 98765 43210</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--accent-tertiary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)' }}>Location</h4>
                  <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Bangalore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="form-input"
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Hello Sumit, I'd like to talk about..." 
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%', marginTop: '1rem' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <style>{`
        .form-input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
