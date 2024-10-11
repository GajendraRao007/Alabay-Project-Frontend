import React, { useState } from 'react';
import '../Styles/TabSlider.css';
import arrow from '../Images/arrow.png';

import cardone from '../Images/cardone.png';
import cardtwo from '../Images/cardtwo.png';
import cardthird from '../Images/cardthird.png';
import cardfourth from '../Images/cardfourth.png';
import cardfifth from '../Images/cardone.png';
import cardsix from '../Images/cardtwo.png';
import cardseven from '../Images/cardthird.png';
import cardeight from '../Images/cardfourth.png';
import cardnine from '../Images/cardone.png';

import vidA from '../Images/vidA.mp4';
import vidB from '../Images/vidB.mp4';
import vidC from '../Images/vidC.mp4';


function TabSlider() {
    const [activeTab, setActiveTab] = useState('all');
    const [photoIndex, setPhotoIndex] = useState(0);
    const photos = [cardone, cardtwo, cardthird, cardfourth, cardfifth, cardsix, cardseven, cardeight, cardnine];
    const videos = [vidA, vidB, vidC];

    const itemsToShow = 3;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setPhotoIndex(0); 
    };

    const handleNextClick = () => {
        setPhotoIndex((prevIndex) => {
            const maxIndex = activeTab === 'photo' ? photos.length : activeTab === 'video' ? videos.length : photos.length + videos.length;
            return Math.min(prevIndex + itemsToShow, maxIndex - itemsToShow);
        });
    };

    const renderContent = () => {
        let items = [];
        if (activeTab === 'photo') {
            items = photos.slice(photoIndex, photoIndex + itemsToShow);
        } else if (activeTab === 'video') {
            items = videos.slice(photoIndex, photoIndex + itemsToShow);
        } else if (activeTab === 'all') {
            const combinedItems = [...photos, ...videos];
            items = combinedItems.slice(photoIndex, photoIndex + itemsToShow);
        }

        return (
            <div className='tabs-content'>
                {items.map((item, index) => (
                    <div key={index} className='item'>
                        {typeof item === 'string' && item.endsWith('.mp4') ? (
                            <video 
                                className='media-video' 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src={item} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={item} alt={`Media ${index + 1}`} className='media-text' />
                        )}
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
        <div className='tabs-section'>
            <div className='tabs-button'>
                <button className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabClick('all')}>ALL</button>
                <button className={activeTab === 'photo' ? 'active' : ''} onClick={() => handleTabClick('photo')}>PHOTOS</button>
                <button className={activeTab === 'video' ? 'active' : ''} onClick={() => handleTabClick('video')}>VIDEOS</button>
            </div>

            {renderContent()}
        </div>
    );
}

export default TabSlider;
