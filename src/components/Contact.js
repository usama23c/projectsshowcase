import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact">
          <h2 className="contact-title">Create an exceptional Flutter & React Native apps & web apps</h2>
         
          <form className="contact-form">
            <div className="form-group">
              <input type="text" className="form-input" id="name" placeholder=" " />
              <label htmlFor="name" className="form-label">Your Name</label>
            </div>
           
            <div className="form-group">
              <input type="email" className="form-input" id="email" placeholder=" " />
              <label htmlFor="email" className="form-label">Your Email</label>
            </div>
           
            <div className="form-group">
              <textarea className="form-input" id="message" placeholder=" "></textarea>
              <label htmlFor="message" className="form-label">Your Message</label>
            </div>
           
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
         
          <div className="contact-btns">
            <a href="#contact" className="btn btn-primary">Say "Hello!"</a>
            <a href="#" className="btn btn-outline">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;