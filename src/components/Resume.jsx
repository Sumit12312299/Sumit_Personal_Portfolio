import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
            <FileText size={40} />
          </div>
          
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get My Detailed Resume</h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Looking for more details about my experience, education, and skills? Download my complete resume to see how I can add value to your team.
          </p>
          
          <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            <Download size={24} /> Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
