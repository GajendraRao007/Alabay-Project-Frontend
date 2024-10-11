import React, { useState } from 'react';
import '../Styles/AlabayHeritageGame.css';
import playbutton from '../Images/play.png';
import hone from '../Images/hone.png';
import htwo from '../Images/htwo.png';
import hthree from '../Images/hthree.png';
import hfour from '../Images/hfour.png';
import downArrow from '../Images/arrowup.png';
import upArrow from '../Images/greendownarrow.png';
import scrollup from '../Images/greenscrollbarup.png';
import scrolldown from '../Images/greenscrollbardown.png';
import heritageBg from '../Images/heritage.png';
import overlayBg from '../Images/heritage.png';
import { Link } from 'react-router-dom';

function AlabayHeritageGame() {
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(true);
    const [showScrollDown, setShowScrollDown] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState({
        backgroundImage: `url(${heritageBg})`,
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
            backgroundImage: `url(${heritageBg})`,
        });
        setTimeout(() => {
            setIsFeaturesVisible(false);
            setIsFading(false);
        }, 500);
    };

    return (
        <>
            <div className='heritage-section' style={backgroundStyle}>
                <div className='txt-box-heritage'>
                    <h1 className='heritage-title'>ALABAY HERITAGE</h1>
                    <h1 className='heritage-subtitle'>THE LOST ADVENTURE</h1>
                </div>

                <div className={`heritage-container ${isFading ? 'fade-out' : ''}`}>
                    {!isFeaturesVisible && (
                        <div className='heritage-scroll'>
                            <h1 className='heritage-para'>
                                Take on the role of the legendary Alabay on a <br />
                                quest to uncover the ancient secrets of its <br />
                                ancestors.
                            </h1>
                            <button className='heritage-play-button'>
                                <img className='play-icon' src={playbutton} alt="" />PLAY
                            </button>

                            <div className='heritage-game-preview'>
                                <h1 className='heritage-game-preview-title'>GAME <span>PREVIEWS</span></h1>

                                <div className='heritage-imgs-box'>
                                    <img className='himg' src={hone} alt="" />
                                    <img className='gimg' src={htwo} alt="" />
                                    <img className='gimg' src={hthree} alt="" />
                                    <img className='himg' src={hfour} alt="" />
                                </div>
                            </div>
                        </div>
                    )}

                    {isFeaturesVisible && (
                        <div className='heritage-features'>
                            <h1 className='heritage-features-title'>FEATURES</h1>
                            <p className='heritage-features-para'>
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

export default AlabayHeritageGame;
