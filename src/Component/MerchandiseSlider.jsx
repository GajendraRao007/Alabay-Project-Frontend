import React, { useState, useEffect } from 'react';
import pinktshirt from '../Images/pink.png';
import orangetshirt from '../Images/orange.png';
import blacktshirt from '../Images/black.png';
import bluecap from '../Images/blue.png';
import previous from '../Images/previous.png';
import next from '../Images/next.png';
import '../Styles/merchandiseslider.css';

import pinkbg from '../Images/pinktshirt.png';
import orangebg from '../Images/orangetshirt.png';
import blackbg from '../Images/blacktshirt.png';
import bluebg from '../Images/bluecap.png';



function MerchandiseSlider() {
  let images = [pinktshirt, orangetshirt, blacktshirt, bluecap];
  let backgrounds = [pinkbg, orangebg, blackbg, bluebg]; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => setFade(false), 500); // Reset fade state after animation
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  function handleNext() {
    setFade(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrev() {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div
      className={`carousel-container ${fade ? 'fade-background' : ''}`}
      style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
    >
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img className="carousel-image" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="discover-button">Discover</button>
      <button className="carousel-button prev" onClick={handlePrev}>
        <img className='previous-icons' src={previous} alt="Previous" />
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <img className='next-icons' src={next} alt="Next" />
      </button>
    </div>
  );
}

export default MerchandiseSlider;
