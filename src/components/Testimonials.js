// File: src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
       
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="testimonial-text">"Usama delivered an exceptional Flutter application that exceeded our expectations. His attention to detail and communication throughout the project was impressive."</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
              </div>
              <div className="author-details">
                <h4>John Smith</h4>
                <p>CEO, Tech Solutions</p>
              </div>
            </div>
          </div>
         
          <div className="testimonial">
            <p className="testimonial-text">"Working with Usama was a great experience. He transformed our idea into a beautiful, functional mobile app that our users love. Highly recommended!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
              </div>
              <div className="author-details">
                <h4>Sarah Johnson</h4>
                <p>Product Manager, StartupX</p>
              </div>
            </div>
          </div>
         
          <div className="testimonial">
            <p className="testimonial-text">"The UI kit we purchased from Usama saved us countless hours of development. The code is clean, well-documented, and easy to customize for our needs."</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Client" />
              </div>
              <div className="author-details">
                <h4>Michael Brown</h4>
                <p>Lead Developer, AppWorks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;