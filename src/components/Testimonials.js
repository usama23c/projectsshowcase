// File: src/components/Testimonials.js
import React from 'react';

// Testimonials Component with carousel
const Testimonials = () => {
  const testimonials = [
    {
      text: '"Usama delivered an exceptional Flutter application that exceeded our expectations. His attention to detail and communication throughout the project was impressive."',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'John Smith',
      position: 'CEO, Tech Solutions'
    },
    {
      text: '"Working with Usama was a great experience. He transformed our idea into a beautiful, functional mobile app that our users love. Highly recommended!"',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Sarah Johnson',
      position: 'Product Manager, StartupX'
    },
    {
      text: '"The UI kit we purchased from Usama saved us countless hours of development. The code is clean, well-documented, and easy to customize for our needs."',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      name: 'Michael Brown',
      position: 'Lead Developer, AppWorks'
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
       
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt="Client" />
                </div>
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  );
};

export default Testimonials;
