import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Say "Hello!"</a>
          <a href="#">Resume</a>
        </div>
       
        <div className="footer-social">
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-medium-m"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-x-twitter"></i></a>
        </div>
       
        <p className="copyright">© 2023 Usama Mehboob. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;