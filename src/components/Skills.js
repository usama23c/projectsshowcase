import React from 'react';

// Skills Component with animation
const Skills = () => {
  const skills = [
    { icon: 'fab fa-flutter', title: 'Flutter Development', 
      description: 'Building beautiful cross-platform applications with Flutter framework for iOS and Android.' },
    { icon: 'fab fa-react', title: 'React Native', 
      description: 'Creating performant mobile apps using React Native with a focus on native user experience.' },
    { icon: 'fas fa-mobile-alt', title: 'UI/UX Design', 
      description: 'Designing intuitive and engaging user interfaces that provide exceptional user experiences.' },
    { icon: 'fas fa-server', title: 'Backend Integration', 
      description: 'Connecting mobile applications with various backend services and RESTful APIs.' }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
       
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
