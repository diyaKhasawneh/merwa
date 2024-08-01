import React from 'react';
import './Services.css';
import Image from 'next/image';
import cardImage1 from '../../../public/c515fca4f90b4bc41145569fc36bfed2.png';
import cardImage2 from '../../../public/serv2.png';
import cardImage3 from '../../../public/serv3.png';
import cardImage4 from '../../../public/serv4.png';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services container" id='services'>
      <p className="services-description">
        At The OurWebsite, we are dedicated to helping you excel in the world of technology
        <br />
        Our services are specifically designed to meet your needs
      </p>
      <div className="cards-container">
        <div className="card animated-fade-in-delay-1 card-right-left">
          <Image src={cardImage2} alt="Service Image" layout="fill" className="card-image" />
          <div className="card-overlay">
            <h1>Coworking Spaces</h1>
            <p>Inspiring Work Environments Designed for Technological Innovation</p>
            <a href="#" className="learn-more">Learn more <FaArrowRight size={15} /></a>
          </div>
        </div>
        <div className="card animated-fade-in-delay-2 card-right-left">
          <Image src={cardImage1} alt="Service Image" layout="fill" className="card-image" />
          <div className="card-overlay">
            <h1>Mentoring and Training</h1>
            <p>Gain Insights from Industry Experts to Boost Your Success</p>
            <a href="#" className="learn-more">Learn more <FaArrowRight size={15} /></a>
          </div>
        </div>
        <div className="card animated-fade-in-delay-3 card-right-left">
          <Image src={cardImage3} alt="Service Image" layout="fill" className="card-image" />
          <div className="card-overlay">
            <h1>Access to Funding and Markets</h1>
            <p>Unlock Financing Opportunities and Expand Your Impact</p>
            <a href="#" className="learn-more">Learn more <FaArrowRight size={15} /></a>
          </div>
        </div>
        <div className="card animated-fade-in-delay-4 card-right-left">
          <Image src={cardImage4} alt="Service Image" layout="fill" className="card-image" />
          <div className="card-overlay">
            <h1>Networking Opportunities</h1>
            <p>Connect with like-minded technology enthusiasts and industry leaders</p>
            <a href="#" className="learn-more">Learn more <FaArrowRight size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
