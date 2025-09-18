import React, { useState, useEffect, useRef } from 'react';

const Header = ({ toggleTheme, theme, toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Section tracking for active nav link
      const sections = document.querySelectorAll('section');
      let currentSection = 'about';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = () => {
    // In a real app, this would download the resume PDF
    alert("Downloading resume...");
  };

  return (
    <header id="header" ref={headerRef} className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <i className="fas fa-code logo-icon"></i>
          {"<UM />"}
        </a>
       
        <nav className="nav-links">
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About Me
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href="#testimonials" 
            className={activeSection === 'testimonials' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Testimonials
          </a>
        </nav>
       
        <div className="header-btns">
          <a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, 'contact')}>
            Say "Hello!"
          </a>
          <a href="#" className="btn btn-primary" onClick={handleResumeClick}>
            <i className="fas fa-download"></i> Resume
          </a>
          <button className="theme-toggle" id="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
          </button>
        </div>
       
        <div className="mobile-menu-btn" id="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
