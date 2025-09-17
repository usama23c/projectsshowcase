import React, { useState, useEffect } from 'react';

const Header = ({ toggleTheme, theme, toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#" className="logo">
          <i className="fas fa-code logo-icon"></i>
          {"<UM />"}
        </a>
       
        <nav className="nav-links">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
       
        <div className="header-btns">
          <a href="#contact" className="btn btn-outline">Say "Hello!"</a>
          <a href="#" className="btn btn-primary">Resume</a>
          <button className="theme-toggle" id="theme-toggle" onClick={toggleTheme}>
            <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
          </button>
        </div>
       
        <div className="mobile-menu-btn" id="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;