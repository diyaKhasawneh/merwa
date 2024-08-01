import React from 'react';
import './Service.css';
import Image from 'next/image';
import cardImage from '../../../public/image-removebg-preview (4).png'; // Replace with your image path

const ServiceNew = () => {
  const cardData = [
    {
      title: 'Coworking Spaces',
      description: 'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity.',
      image: cardImage,
      background: '#3F485E',
      textColor: '#fff',
      radios :'200px, 0px, 0px, 117px'
      
    },
    {
      title: 'Coworking Spaces',
      description: 'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity.',
      image: cardImage,
      background: 'none',
      textColor: '#3F485E',
    },
    {
      title: 'Coworking Spaces',
      description: 'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity.',
      image: cardImage,
      background: '#3F485E',
      textColor: '#fff',
      radios :'0px, 0px, 0px, 117px'
    },
    {
      title: 'Coworking Spaces',
      description: 'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity.',
      image: cardImage,
      background: 'none',
      textColor: '#3F485E',
    },
  ];

  return (
    <section className="service-new-section container">
      <div className="service-new-content ">
        <h1 className="service-new-title">Services</h1>
        <p className="service-new-description">
          With lots of unique blocks, you can easily build a page easily without any coding.
        </p>
        <div className="service-new-cards ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="service-new-card  "
              style={{ background: card.background, color: card.textColor  }}
            >
              <div className="service-new-card-content ">
                <div className="service-new-card-image">
                  <Image className='animated-image'   src={card.image} alt={`Card Image ${index + 1}`} />
                </div>
                <div className="service-new-card-text">
                  <h2 className='titleserv'>{card.title}</h2>
                  <p className='descserv'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNew;
