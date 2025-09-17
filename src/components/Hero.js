import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 50;
     
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
       
        // Random properties
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
       
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
       
        particlesContainer.appendChild(particle);
      }
    };
   
    createParticles();
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

export default Hero;