import React from 'react';

// About Component with animation
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
       
        <div className="about-content">
          <p className="about-text">Enthusiastic about mobile development with a focus on delivering excellent user experiences. Proficient in using Flutter & React Native to create & deploy high-quality cross-platform applications.</p>
         
          <div className="social-links">
            {[
              { icon: 'fab fa-youtube', text: 'YOUTUBE' },
              { icon: 'fab fa-instagram', text: 'INSTAGRAM' },
              { icon: 'fab fa-linkedin-in', text: 'LINKEDIN' },
              { icon: 'fab fa-medium-m', text: 'MEDIUM' },
              { icon: 'fab fa-x-twitter', text: 'X' }
            ].map((link, index) => (
              <a key={index} href="#" className="social-link">
                <i className={link.icon}></i> {link.text}
              </a>
            ))}
          </div>
         
          <p className="about-text">Here you can find a list of selected projects that I've recently worked on</p>
        </div>
      </div>
    </section>
  );
};
export default About;
