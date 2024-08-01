import React from 'react';
import Image from 'next/image';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div style={{marginLeft:'100px'}} className="hero-content animated-fade-in">
       <div className='contentflex'> <h2>Welcome to <span className="highlight">OurWebsite</span> Your Platform for Launching Towards Technological Success!</h2></div>
      </div>
    </section>
  );
};

export default Hero;
