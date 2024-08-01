import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="icons-container">
        <a href="#" className="icon-link">
          <FaFacebook />
        </a>
        <a href="#" className="icon-link">
          <FaTwitter />
        </a>
        <a href="#" className="icon-link">
          <FaInstagram />
        </a>
        <a href="#" className="icon-link">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
