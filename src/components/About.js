import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="divider-line"></div>
          </div>
          <p className="section-subtitle">Get to know me better</p>
        </div>
       
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text-container">
              <p className="about-text">
                I'm a passionate mobile developer with expertise in creating exceptional user experiences. 
                My focus is on building high-quality cross-platform applications using Flutter & React Native.
              </p>
              <p className="about-text">
                With a keen eye for design and performance, I strive to create applications that are not only 
                functional but also delightful to use. I believe in writing clean, maintainable code and 
                following best practices.
              </p>
              <p className="about-text">
                Here you can find a selection of projects that I've recently worked on, showcasing my skills 
                and approach to development.
              </p>
              
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-container">
                <div className="profile-image">
                  <i className="fas fa-user"></i>
                </div>
                <div className="image-background"></div>
              </div>
            </div>
          </div>
         
          <div className="social-section">
            <h3 className="social-title">Connect with me</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <div className="social-icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <span>YOUTUBE</span>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <span>INSTAGRAM</span>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <span>LINKEDIN</span>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">
                  <i className="fab fa-medium-m"></i>
                </div>
                <span>MEDIUM</span>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">
                  <i className="fab fa-x-twitter"></i>
                </div>
                <span>TWITTER</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
