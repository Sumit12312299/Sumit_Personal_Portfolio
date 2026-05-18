import React from 'react';
import { Code2, Database, LayoutTemplate, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <LayoutTemplate size={32} className="text-accent" />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      title: "Backend Development",
      icon: <Database size={32} className="text-accent" />,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "SQL"]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal size={32} className="text-accent" />,
      skills: ["Git & GitHub", "Docker", "VS Code", "Postman", "Linux"]
    },
    {
      title: "Core Concepts",
      icon: <Code2 size={32} className="text-accent" />,
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "System Design Basics"]
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
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <motion.div 
          className="grid-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div variants={itemVariants} key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--accent-primary)', background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', m: 0 }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    style={{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
