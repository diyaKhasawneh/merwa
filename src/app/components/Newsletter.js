import React from 'react';
import './Newsletter.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h1>Subscribe to Our Newsletter</h1>
        <p>Your download should start automatically, if not <a href="#">Click here</a>. Should I give up, huh?</p>
        <div className="newsletter-form">
          <div className="input-container">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
          <div className="social-media">
            <a href="#" className="social-icon"><FaFacebook size={24} /></a>
            <a href="#" className="social-icon"><FaTwitter size={24} /></a>
            <a href="#" className="social-icon"><FaInstagram size={24} /></a>
            <a href="#" className="social-icon"><FaLinkedin size={24} /></a>
          </div>
         
       
        </div>
        <hr className="divider" />
      </div>
      <div className="footer-content">
      <div className="copyright">Copyright © 2024 OurWebsite. All Rights Reserved.</div>
      <div className="lang-dropdownf">
        <select className="lang-selectf">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
    </section>
  );
};

export default Newsletter;
