import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
       
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-flutter"></i>
            </div>
            <h3 className="skill-title">Flutter Development</h3>
            <p className="skill-description">Building beautiful cross-platform applications with Flutter framework for iOS and Android.</p>
          </div>
         
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="skill-title">React Native</h3>
            <p className="skill-description">Creating performant mobile apps using React Native with a focus on native user experience.</p>
          </div>
         
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="skill-title">UI/UX Design</h3>
            <p className="skill-description">Designing intuitive and engaging user interfaces that provide exceptional user experiences.</p>
          </div>
         
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="skill-title">Backend Integration</h3>
            <p className="skill-description">Connecting mobile applications with various backend services and RESTful APIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;