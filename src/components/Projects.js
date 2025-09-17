import React, { useState } from 'react';
import Modal from './Modal';

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Hotel Booking - UI Kit",
      price: "$99",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Flutter Hotel Booking is a premium UI kit that you can use to build various hotel booking apps using Flutter.",
      features: ["Flutter", "Dart", "Responsive", "60+ Screens", "Dark Mode", "Animations"],
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "SportUp - Sport UI Kit",
      price: "$99",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "SportUp is a premium Flutter UI kit designed for building modern and feature-rich sports apps.",
      features: ["Flutter", "Firebase", "Animations", "40+ Screens", "Charts", "Social Features"],
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019614242-c5c5a0a2407f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Taxi Booking - Passenger UI Kit",
      price: "$149",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Taxi Booking is a premium Flutter UI kit designed for building modern and feature-rich taxi apps.",
      features: ["Flutter", "Maps", "Payment", "30+ Screens", "Real-time Tracking", "Multiple Payment Options"],
      gallery: [
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Crypto Wallet",
      price: "FREE",
      image: "https://images.unsplash.com/photo-1621761191315-26d0fba4c66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The Crypto Wallet App UI Concept is built with Flutter and dynamic animations for an engaging experience.",
      features: ["Flutter", "Animations", "Charts", "20+ Screens", "Portfolio Tracking", "Real-time Prices"],
      gallery: [
        "https://images.unsplash.com/photo-1621761191315-26d0fba4c66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1621761191336-33dcd477c5ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1621761191342-4e5a731ac681?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const openModal = (projectId) => {
    setActiveModal(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Some of paid & freebies of my resources</h2>
        <p>Explore premium and free resources crafted to elevate your projects</p>
       
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <p className="project-price">{project.price}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-cta">
                  <button className="btn btn-outline view-details" onClick={() => openModal(project.id)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {projects.map(project => (
        <Modal 
          key={project.id} 
          project={project} 
          isOpen={activeModal === project.id} 
          onClose={closeModal} 
        />
      ))}
    </section>
  );
};

export default Projects;