import React, { useEffect } from 'react';

// Hero Component with improved particles
const Hero = () => {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      particlesContainer.innerHTML = '';
      
      const particleCount = 50;
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9c74f'];
     
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
       
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
       
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.background = color;
       
        particlesContainer.appendChild(particle);
      }
    };
   
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section className="hero">
      <div className="particles-container" id="particles"></div>
      <div className="floating-logos">
        <i className="fab fa-flutter floating-logo"></i>
        <i className="fab fa-react floating-logo"></i>
        <i className="fas fa-mobile-alt floating-logo"></i>
        <i className="fas fa-code floating-logo"></i>
      </div>
     
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">🤟 Hello, I am Usama Mehboob,</p>
          <h1 className="hero-title">Helping Digital founders Craft unique, Empathic Applications</h1>
         
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Say "Hello!"</a>
            <a href="#" className="btn btn-outline">Resume</a>
          </div>
        </div>
      </div>
     
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL DOWN</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};
