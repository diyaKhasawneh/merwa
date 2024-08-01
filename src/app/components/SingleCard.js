import React from 'react';
import './SingleCard.css';
import Image from 'next/image';
import cardImage from '../../../public/imgvideo.png'; 
import { FaPlay  } from 'react-icons/fa'; 

const SingleCard = () => {
  return (
    <div className="single-card container">
      <div className="card-container">
        <div className="card-image-container">
          <Image src={cardImage} alt="Left Side Image" layout="fill" className="card-image2" />
          <div className="card-video-icon">
            <FaPlay size={30} className="play-icon" />
          </div>
        </div>
        <div className="card-text">
          <h2>
            <span className="highlight">OurWebsite</span> Your Gateway to <br></br>Technological Excellence <br></br>   Get a quick glimpse into thedynamic <br></br>environment at  The OurWebsite and  <br></br>the benefits that await you.
          </h2>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
