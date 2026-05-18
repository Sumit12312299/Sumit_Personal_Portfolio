import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Premium Parking Management System",
      description: "A robust full-stack parking management solution featuring a real-time interactive visual map of parking spots, secure QR-based E-Ticket generation with instant vehicle/user verification, and automated workflows for extensions and cancellations.",
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop",
      tags: ["Django", "Python", "SQLite", "JavaScript", "Bootstrap", "QR Code API"],
      github: "https://github.com/Sumit12312299/Parking_Management_System",
      demo: "https://parking-management-system-lkvt.onrender.com"
    },
    {
      title: "AI Resume Analyzer",
      description: "An intelligent React-based application that parses resumes against job descriptions, leveraging Large Language Models (LLMs) to provide customized feedback, keyword optimization, and resume scores to help students ace placement drives.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Vite", "Gemini API", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Sumit12312299/AI_Resume_Analyzer",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A low-latency, high-performance messaging platform featuring private chat rooms, instant notifications, typing indicators, and read receipts utilizing WebSockets and high-speed in-memory database caching.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Socket.io", "Node.js", "Express", "Redis"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <motion.div 
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              variants={itemVariants} 
              key={index} 
              className="glass-panel project-panel" 
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'var(--gradient-text)',
                  opacity: 0.2, mixBlendMode: 'overlay', zIndex: 1
                }} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="project-image"
                />
              </div>
              
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', background: 'rgba(0, 240, 255, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '12px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="project-link">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.demo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .project-panel:hover .project-image { transform: scale(1.05); }
        .project-link:hover { color: var(--accent-primary) !important; }
      `}</style>
    </section>
  );
};

export default Projects;
