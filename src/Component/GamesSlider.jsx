import React, { useState } from 'react';
import '../Styles/GamesSlider.css';
import gameimg from '../Images/gameimg.png';
import gamepic from '../Images/gamepic.png';
import next from '../Images/arrow.png';
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function GamesSlider() {
  let images = [gameimg, gamepic];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const discoverButtonStyle = {
    backgroundColor: currentIndex === 0 ? '#843AFC' : '#45D689',
  };

  const discoverLink = currentIndex === 0 ? '/alabay-guardian-game' : '/alabay-heritage-game'; 

  return (
    <div className="game-carousel-container">
      <div
        className="game-carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="game-carousel-item" key={index}>
            <img className="game-carousel-image" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <Link to={discoverLink}>
        <button className="game-discover-button" style={discoverButtonStyle}>
          DISCOVER <IoArrowForwardOutline className='btn-icon'/>
        </button>
      </Link>
      <button className="game-carousel-button next" onClick={handleNext}>
        <img className='game-next-icons' src={next} alt="Next" />
      </button>
    </div>
  );
}

export default GamesSlider;
