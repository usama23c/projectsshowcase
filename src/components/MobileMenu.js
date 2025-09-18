import React from 'react';
// Mobile Menu Component
const MobileMenu = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
      <button className="mobile-menu-close" onClick={toggleMenu}>
        <i className="fas fa-times"></i>
      </button>
      <nav className="mobile-nav-links">
        <a href="#about" onClick={toggleMenu}>About Me</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#testimonials" onClick={toggleMenu}>Testimonials</a>
        <a href="#contact" onClick={toggleMenu}>Say "Hello!"</a>
        <a href="#" onClick={toggleMenu}>Resume</a>
      </nav>
    </div>
  );
};
