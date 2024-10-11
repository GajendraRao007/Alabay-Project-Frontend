import React, { useState } from 'react';
import '../Styles/AlabayGuardianGame.css';
import playbutton from '../Images/play.png';
import gone from '../Images/gone.png';
import gtwo from '../Images/gtwo.png';
import gthree from '../Images/gthree.png';
import downArrow from '../Images/arrowup.png';
import upArrow from '../Images/arrowdown.png';
import scrollup from '../Images/scrollup.png';
import scrolldown from '../Images/scrolldown.png';
import guardianBg from '../Images/guardian.png';
import overlayBg from '../Images/overlay.png';
import { Link } from 'react-router-dom';

function AlabayGurdianGame() {
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(true);
    const [showScrollDown, setShowScrollDown] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState({
        backgroundImage: `url(${guardianBg})`,
    }); 

    const showFeatures = () => {
        setIsFading(true);
        setShowScrollUp(false);
        setShowScrollDown(true);
        setBackgroundStyle({
            backgroundImage: `url(${overlayBg}), linear-gradient(226.59deg, rgba(24, 23, 28, 0) 17.03%, rgba(24, 23, 28, 0.76) 45.57%, #18171C 81.8%)`,
            backgroundBlendMode: 'overlay',
        });
        setTimeout(() => {
            setIsFeaturesVisible(true);
            setIsFading(false);
        }, 500);
    };

    const showScroll = () => {
        setIsFading(true);
        setShowScrollUp(true);
        setShowScrollDown(false);
        setBackgroundStyle({
            backgroundImage: `url(${guardianBg})`,
        });
        setTimeout(() => {
            setIsFeaturesVisible(false);
            setIsFading(false);
        }, 500);
    };

    return (
        <>
            <div className='guardian-section' style={backgroundStyle}>
                <div className='txt-box-guardian'>
                    <h1 className='guardian-title'>ALABAY GUARDIAN</h1>
                    <h1 className='guardian-subtitle'>SHEPHERD OF THE STEPPES</h1>
                </div>

                <div className={`guardian-container ${isFading ? 'fade-out' : ''}`}>
                    {!isFeaturesVisible && (
                        <div className='guardian-scroll'>
                            <h1 className='guardian-para'>
                                Take on the role of the legendary Alabay on a <br />
                                quest to uncover the ancient secrets of its <br />
                                ancestors.
                            </h1>
                            <button className='play-button'>
                                <img className='play-icon' src={playbutton} alt="" />PLAY
                            </button>

                            <div className='guardian-game-preview'>
                                <h1 className='guardian-game-preview-title'>GAME <span>PREVIEWS</span></h1>

                                <div className='guardian-imgs-box'>
                                    <img className='gimg' src={gone} alt="" />
                                    <img className='gimg' src={gtwo} alt="" />
                                    <img className='gimg' src={gthree} alt="" />
                                </div>
                            </div>
                        </div>
                    )}

                    {isFeaturesVisible && (
                        <div className='guardian-features'>
                            <h1 className='guardian-features-title'>FEATURES</h1>
                            <p className='features-para'>
                                Explore a variety of landscapes, including <span>mountains</span>, <span>forests</span>, <span>deserts</span>, and <span>ancient ruins.</span><br />
                                <br />
                                Use the Alabay's <span>abilities</span> to solve <span>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.<br />
                                <br />
                                Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the<br />
                                breed's role in ancient history.<br />
                                <br />
                                Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.<br />
                                <br />
                                Challenge Modes:<br />
                                - <span>Time Trials</span>: Compete in special timed challenges where the Alabay must navigate through complex mazes or complete puzzles within a time limit.<br />
                                - <span>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world, uncovering all secrets.
                            </p>

                            <div className='features-button-box'>
                                <button className='features-play-button'>
                                    <img className='play-icon' src={playbutton} alt="" />PLAY
                                </button>
                             <Link className='Link' to='/'><button className='features-exit-button'>
                                    <img className='play-icon-exit' src={playbutton} alt="" />EXIT
                                </button></Link> 
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="floating-buttons">
                <button className="down-arrow" onClick={showScroll}>
                    <img src={downArrow} alt="Down Arrow" />
                </button>

                {showScrollUp && <img className='scrollbarimg' src={scrollup} alt="Scroll Up" />}
                {showScrollDown && <img className='scrollbarimg' src={scrolldown} alt="Scroll Down" />}

                <button className="up-arrow" onClick={showFeatures}>
                    <img src={upArrow} alt="Up Arrow" />
                </button>
            </div>
        </>
    );
}

export default AlabayGurdianGame;
