import React from 'react';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} id="mobile-menu-overlay">
      <button className="mobile-menu-close" id="mobile-menu-close" onClick={toggleMenu}>
        <i className="fas fa-times"></i>
      </button>
      <nav className="mobile-nav-links">
        <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About Me</a>
        <a href="#skills" className="mobile-nav-link" onClick={toggleMenu}>Skills</a>
        <a href="#projects" className="mobile-nav-link" onClick={toggleMenu}>Projects</a>
        <a href="#testimonials" className="mobile-nav-link" onClick={toggleMenu}>Testimonials</a>
        <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>Say "Hello!"</a>
        <a href="#" className="mobile-nav-link" onClick={toggleMenu}>Resume</a>
      </nav>
    </div>
  );
};

export default MobileMenu;