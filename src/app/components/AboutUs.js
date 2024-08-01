import React from 'react';
import './AboutUs.css';
import { FaRocket   } from 'react-icons/fa';
import { FiClipboard } from 'react-icons/fi';
import { PiTargetThin } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { IoTelescopeOutline } from "react-icons/io5";
import { PiLightbulbFilament } from "react-icons/pi";


import Image from 'next/image';
import rightImage from '../../../public/about.png'; 

const LeftRightSection = () => {
  return (
    <section className="left-right-section container" id='about'>
      <div className="section-header">
        <h1>About Us</h1>
        <p>With lots of unique blocks, you can easily build a page easily without any coding.</p>
      </div>
      <div className="left-right-content">
        <div className="left-column">
          <div className="title-with-icon">
            
            <h1 className="highlight">OurWebsite</h1>
          </div>
          <h3>We offer more than just a workspace</h3>
          <div className="info-items">
            <div className="info-item">
              <IoRocketOutline className="icon highlight" />
              <div className="info-text">
                <h4>Fostering Collaboration</h4>
                <p>Encouraging synergy among different entities in the technology ecosystem, including startups, freelancers, companies, academia, and government.</p>
              </div>
            </div>
            <div className="info-item">
              <PiLightbulbFilament className="icon highlight" />
              <div className="info-text">
                <h4>Promoting Innovation</h4>
                <p>By providing support and guidance/training, the center aims to cultivate an environment where new ideas and innovative solutions can thrive</p>
              </div>
            </div>
            <div className="info-item">
              <PiTargetThin className="icon highlight" />
              <div className="info-text">
                <h4> Mission Statement
                </h4>
                <p>A technological revolution in East amman through fostering innovation, collaboration, education, and community growth</p>
              </div>
            </div>
            <div className="info-item">
              <IoTelescopeOutline className="icon highlight" />
              <div className="info-text">
                <h4>Vision Statement</h4>
                <p>Establishing a leading technological hub as a catalyst for technological advancement and social development in East amman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <Image src={rightImage} alt="Right Side Image" className="right-image animated-image" />
        </div>
      </div>
    </section>
  );
};

export default LeftRightSection;
