import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Oct 2025",
      description: "Validated expertise in designing distributed systems on AWS."
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "Aug 2025",
      description: "Comprehensive training in React, UI/UX principles, and modern web development."
    },
    {
      title: "Hackathon Winner - CodeFest 2025",
      issuer: "Tech Innovators",
      date: "Mar 2025",
      description: "First place out of 50+ teams for building an accessible education platform."
    },
    {
      title: "Google Cloud Data Engineer Professional",
      issuer: "Google",
      date: "Jan 2025",
      description: "Proven ability to design, build, and operationalize data processing systems."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((item, index) => (
            <motion.div variants={itemVariants} key={index} className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }} whileHover={{ scale: 1.02 }}>
              <div style={{ color: 'var(--accent-secondary)', padding: '1rem', background: 'rgba(112, 0, 255, 0.1)', borderRadius: '12px' }}>
                <Award size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 600 }}>{item.issuer}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
