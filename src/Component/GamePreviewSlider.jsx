import React, { useState } from 'react';
import '../Styles/GamePreviewSlider.css';
import arrow from '../Images/arrow.png';
import gamea from '../Images/a.png';
import gameb from '../Images/b.png';
import gamec from '../Images/c.png';


function GamePreviewSlider() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const items = [gamea, gameb, gamec];
    const itemsToShow = 3;

    const handleNextClick = () => {
        setPhotoIndex((prevIndex) => Math.min(prevIndex + itemsToShow, items.length - itemsToShow));
    };

    const renderContent = () => {
        const visibleItems = items.slice(photoIndex, photoIndex + itemsToShow);

        return (
            <div className='game-preview-content'>
                {visibleItems.map((item, index) => (
                    <div key={index} className='game-preview-item'>
                        <img src={item} alt={`Game ${index + 1}`} className='game-preview-image' />
                    </div>
                ))}
                <div className='arrow-button-box'>
                    <button className='arrow-button' onClick={handleNextClick}>
                        <img className='arrow-button' src={arrow} alt="Next" />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className='game-preview-box'>
            {renderContent()}
        </div>
    );
}

export default GamePreviewSlider;
