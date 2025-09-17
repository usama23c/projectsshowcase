// File: src/components/ProjectModal2.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectModal2 = ({ closeModal }) => {
  return (
    <div className="modal active" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-header">
          <h3 className="modal-title">SportUp - Sport UI Kit</h3>
          <p className="modal-price">$99</p>
        </div>
        <div className="modal-body">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="SportUp App" className="modal-image" />
         
          <div className="image-gallery">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5a0a2407f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Screenshot 3" />
            </div>
          </div>
         
          <p className="modal-description">SportUp is a premium Flutter UI kit designed for building modern and feature-rich sports apps. It includes workout tracking, nutrition plans, and social features.</p>
         
          <div className="modal-features">
            <span className="modal-feature">Flutter</span>
            <span className="modal-feature">Firebase</span>
            <span className="modal-feature">Animations</span>
            <span className="modal-feature">40+ Screens</span>
            <span className="modal-feature">Charts</span>
            <span className="modal-feature">Social Features</span>
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

export default ProjectModal2;