import React from 'react';
import './Contact.css';
import contactImage from './s.jpg'; // Import the image

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          {/* Left Side: Image */}
          <div className="contact-image">
            <img src={contactImage} alt="Contact Us" />
          </div>
          {/* Right Side: Form */}
          <div className="contact-form-container">
            <form action="#" method="post" className="contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
