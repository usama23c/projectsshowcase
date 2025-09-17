// File: src/components/ProjectModal1.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectModal1 = ({ closeModal }) => {
  return (
    <div className="modal active" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-header">
          <h3 className="modal-title">Hotel Booking - UI Kit</h3>
          <p className="modal-price">$99</p>
        </div>
        <div className="modal-body">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hotel Booking App" className="modal-image" />
         
          <div className="image-gallery">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Screenshot 3" />
            </div>
          </div>
         
          <p className="modal-description">Flutter Hotel Booking is a premium UI kit that you can use to build various hotel booking apps using Flutter. It includes over 50 screens with modern design and smooth animations.</p>
         
          <div className="modal-features">
            <span className="modal-feature">Flutter</span>
            <span className="modal-feature">Dart</span>
            <span className="modal-feature">Responsive</span>
            <span className="modal-feature">60+ Screens</span>
            <span className="modal-feature">Dark Mode</span>
            <span className="modal-feature">Animations</span>
          </div>
         
          <div className="modal-buttons">
            <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faEye} /> Live Preview</a>
            <a href="#" className="btn btn-accent"><FontAwesomeIcon icon={faGithub} /> Source Code</a>
            <a href="#" className="btn btn-outline"><FontAwesomeIcon icon={faShoppingCart} /> Purchase</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal1;