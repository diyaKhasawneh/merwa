import React from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="contact-us-section" id='contact'>
      <div className="container">
        <div className="content-wrapper">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            With lots of unique blocks, you can easily build a page easily without any coding.
          </p>
          <h1 className="contact-subtitle">Get in touch today!</h1>
        </div>
        <div className="contact-details-wrapper">
          <div className="left-column">
            <h1 className="details-title">Contact Details</h1>
            <div className="details-grid">
              <div className="detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <div className="detail-text">
                  <h4>Find Us</h4>
                  <p>2301 AMMAN, JORDAN</p>
                </div>
              </div>
              <div className="detail-item">
                <FaPhone className="detail-icon" />
                <div className="detail-text">
                  <h4>Phone</h4>
                  <p>+ (06) 111-1111<br />+ (06) 111-1111</p>
                </div>
              </div>
              <div className="detail-item">
                <FaClock className="detail-icon" />
                <div className="detail-text">
                  <h4>Working Hours</h4>
                  <p>Mon-Fri: 8 AM - 5 PM<br />Sat-Sun: 8 AM - 2 PM</p>
                </div>
              </div>
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div className="detail-text">
                  <h4>Write to Us</h4>
                  <p>info@ourwebsite.com<br />info@diya.com</p>
                </div>
              </div>
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div className="detail-text">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <FaFacebook className="social-icon1" />
                    <FaTwitter className="social-icon1" />
                    <FaLinkedin className="social-icon1" />
                    <FaInstagram className="social-icon1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column">
            <h1 className="form-title">Have a question?</h1>
            <form className="contact-form">
            <div className="form-group">
            <label htmlFor="email">Type</label>
            <input type="text" id="text" placeholder="" />
          </div>
             <div className='groubinp' style={{display:'flex', gap:'3px'}}>
             <div className="form-group">
             <label htmlFor="name">Name</label>
             <input type="text" id="name" placeholder="Your Name" />
           </div>
           <div className="form-group">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" placeholder="Your Email" />
           </div>
             </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>
        </div>
        <div className="map-section">
       
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.358147799637!2d35.873676314596705!3d31.950377181381928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150f5b054eb53f97%3A0x1340d7a0ad7c0920!2s2301%20Amman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1638999012452!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
      </div>
    </section>
  );
};

export default ContactUs;
