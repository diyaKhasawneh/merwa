import React from 'react';
import './Partners.css';
import Image from 'next/image';
import cardImage from '../../../public/circle.png'; 

const Partners = () => {
  const cardData = [
    {
      description: 'Agreement between XYZ and  OurWebsite',
      image: cardImage,
    },
    {
      description: 'Agreement between XYZ and  OurWebsite',
      image: cardImage,
    },
    {
      description: 'Agreement between XYZ and OurWebsite',
      image: cardImage,
    },
  ];

  return (
    <section className="partners-section" id='partners'>
      <div className="content-wrapper">
        <h1 className="partners-title">Partners</h1>
        <p className="partners-description">
          With lots of unique blocks, you can easily build a page easily without any coding.
        </p>
        <div className="parent">
          {cardData.map((card, index) => (
            <div key={index} className="partner-card">
              <div className="image-container">
                <Image src={card.image} alt={`Card Image ${index + 1}`} className="card-image rotate-infinitely" />
              </div>
              <p className="card-description">Agreement between XYZ and  <br></br> OurWebsite</p>
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
