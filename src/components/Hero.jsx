import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import AbstractShape from './AbstractShape';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="container test-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'center' }}>
        
        {/* Left Column Text */}
        <div style={{ maxWidth: '800px', zIndex: 10 }}>
          <p className="animate-fade-in text-gradient" style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Welcome to my portfolio
          </p>
          <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Hi, I'm <span className="text-gradient">Sumit Kumar</span><br/>
            Software Engineer.
          </h1>
          <p className="animate-fade-in delay-200" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
            I build exceptional, high-performance digital experiences. Passionate about creating elegant solutions to complex problems and always eager to learn new technologies.
          </p>
          
          <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Contact Me
            </a>
          </div>

          <div className="animate-fade-in delay-300" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="social-icon" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="social-icon" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Right Column 3D Canvas */}
        <div className="canvas-container" style={{ height: '600px', width: '100%', position: 'relative' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AbstractShape />
            <Environment preset="city" />
          </Canvas>
        </div>

      </div>
      <style>{`
        .social-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-3px);
        }
        
        @media (max-width: 900px) {
          .test-container {
             grid-template-columns: 1fr !important;
             text-align: center;
          }
          .canvas-container {
             height: 400px !important;
             margin-top: 2rem;
          }
          .animate-fade-in > a {
            margin: 0 auto;
          }
          h1 {
            font-size: clamp(2.5rem, 8vw, 4rem) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
