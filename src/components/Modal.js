import React, { useEffect } from 'react';

const Modal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} id={`project-modal-${project.id}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fas fa-times"></i></button>
        <div className="modal-header">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-price">{project.price}</p>
        </div>
        <div className="modal-body">
          <img src={project.image} alt={project.title} className="modal-image" />
         
          <div className="image-gallery">
            {project.gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Screenshot ${index + 1}`} />
              </div>
            ))}
          </div>
         
          <p className="modal-description">{project.description}</p>
         
          <div className="modal-features">
            {project.features.map((feature, index) => (
              <span key={index} className="modal-feature">{feature}</span>
            ))}
          </div>
         
          <div className="modal-buttons">
            <a href="#" className="btn btn-primary"><i className="fas fa-eye"></i> Live Preview</a>
            <a href="#" className="btn btn-accent"><i className="fab fa-github"></i> Source Code</a>
            <a href="#" className="btn btn-outline">
              <i className={project.price === "FREE" ? "fas fa-download" : "fas fa-shopping-cart"}></i> 
              {project.price === "FREE" ? "Download" : "Purchase"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;