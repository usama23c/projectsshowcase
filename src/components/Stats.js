import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counted, setCounted] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { icon: 'fas fa-project-diagram', number: 50, label: 'Projects Completed' },
    { icon: 'fas fa-users', number: 120, label: 'Happy Clients' },
    { icon: 'fas fa-code-branch', number: 500, label: 'Commits' },
    { icon: 'fas fa-award', number: 15, label: 'Awards Received' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [counted]);

  return (
    <div className="container">
      <div className="stats-container" ref={statsRef}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-number">
              {counted ? stat.number : 0}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;