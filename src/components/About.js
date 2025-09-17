import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
       
        <div className="about-content">
          <p className="about-text">Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient in using Flutter & React Native to create & deploy high-quality cross-platform applications.</p>
         
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-youtube"></i> YOUTUBE</a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i> INSTAGRAM</a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i> LINKEDIN</a>
            <a href="#" className="social-link"><i className="fab fa-medium-m"></i> MEDIUM</a>
            <a href="#" className="social-link"><i className="fab fa-x-twitter"></i> X</a>
          </div>
         
          <p className="about-text">Here you can find a list of selected projects that I've recently worked on</p>
        </div>
      </div>
    </section>
  );
};

export default About;