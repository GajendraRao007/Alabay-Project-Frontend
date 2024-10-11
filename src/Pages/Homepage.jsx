import '../Styles/Homepage.css'
import TabSlider from '../Component/Tabslider';
import MerchandiseSlider from '../Component/MerchandiseSlider';
import GamesSlider from '../Component/GamesSlider';
import dogimg from '../Images/dogimg.png';
import alldogs from '../Images/alldogs.png';
import vision from '../Images/vision.png';
import cardone from '../Images/cardone.png';
import cardtwo from '../Images/cardtwo.png';
import cardthird from '../Images/cardthird.png';
import cardfourth from '../Images/cardfourth.png';
import moneydog from '../Images/moneydog.png'
import bar from '../Images/bar.png'
import GamePreviewSlider from '../Component/GamePreviewSlider';
import social from '../Images/social.png'
import twitter from '../Images/twitter.png'
import telegram from '../Images/telegram.png'

function Homepage(){
    return(
        <>
        <div>
            <div className='landingPage-Section'>
                <div className='title-container'>
                <h1 className='landing-title-stroke'>welcome to alabay world</h1>
                <h1 className='landing-title'>welcome to alabay world</h1>
                </div>
                <div className='landing-text-container'>
                 <h1 className='landing-text'>where the <span> legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <br /> <span>Join us</span> in celebrating the <span>strength</span>, <span>loyalty</span>, and <span>heritage</span> of the Alabay <br /> breed.</h1>   
                </div>
            </div>
        <div className='scroll-section'>
        <div className='hero-section'>
            <div className='bar-img-box'>
            <img className='bar-img' src={bar} alt="" srcset="" />
            </div>
            <div className='hero-section-content'>
                <div className='dog-img-box'>
                    <img className='dog-img' src={dogimg} alt="" srcset="" />
                </div>
                <div className='hero-text'>
                    <h1 className='hero-title-text'>History Of</h1>
                    <h1 className='hero-logo-text'>ALABAY</h1>
                    <p className='hero-section-description'>The Central Asian Shepherd Dog, <br /> also known as Alabay, has been a <br /> guardian of livestock and property <br /> for centuries. Originating from <br /> Central Asia, these dogs are <br />renowned for their courage, <br /> strength, and loyalty.</p>
                </div>
            </div>
        </div>

        <div className='tab-slider'>
            <TabSlider/>
        </div>

        <div className='project-vision-section'>
            <h1 className='project-vision-title'>PROJECT VISION</h1>
            <div className='img-background'>
            <img className='alldogs-img' src={alldogs} alt="" srcset="" />
            <p className='project-vision-description'>Our mission is to honor the heritage of the Alabay by creating a <br /> vibrant, loyal, and powerful community. Just as the Alabay protects its <br /> flock, we aim to build a pack that stands strong together.</p>

            <h1 className='road-map-title'>ROAD MAP</h1>
            </div>
        </div>

        <div className='raod-map-section'>
            <div className='road-map-content'>
                <h1 className='road-map-text'>Our journey is just beginning. <br /> Explore our roadmap to see the <br /> exciting milestones and future <br /> plans we have in store.</h1>
                <h1 className='road-map-text-joinus'>Join us as we grow and achieve <br /> new heights.</h1>
            </div>
            <div>
                <img className='vision-img' src={vision} alt="" />
            </div>
        </div>

        <div className='cards-section'>
            <div className='card-first'>
                <h1 className='card-text'>Community <br /> Building </h1>
                <h1 className='card-text-small'>and Initial Launch</h1>
                <img className='card-imgs' src={cardone} alt="" srcset="" />
            </div>
            <div className='card-second'>
                <h1 className='card-text'>Merchandise</h1>
                <h1 className='card-text-two'>Store Launch</h1>
                <img className='card-imgs' id='img-second' src={cardtwo} alt="" srcset="" />
            </div>
            <div className='card-third'>
                <h1 className='card-text'>Community <br />
                Events</h1>
                <h1 className='card-text-small'>and contests</h1>
                <img className='card-imgs' src={cardthird} alt="" srcset="" />
            </div>
            <div className='card-fourth'>
                <h1 className='card-text'>Expansion <br />
                and New <br /></h1>
                <h1 className='card-text-small'>Features</h1>
                <img className='card-imgs' src={cardfourth} alt="" srcset="" />
            </div>

        </div>

        <div className='section-six-background'>
            <h1 className='title-text-section-six'>TOKENOMICS</h1>
            <div className='section-six-content'>
                <div>
                    <div className='box'><h1 className='box-text-small'>LIQUIDITY</h1><br /><h1 className='box-text-large'>LOCKED</h1></div> <br />
                    <div className='box'><h1 className='box-text-small'>CONTRACT</h1><br /><h1 className='box-text-large'>RENOUNCED</h1></div> <br />
                    <div className='box'><h1 className='box-text-small'>TAXES</h1><br /><h1 className='box-text-large'>0%</h1></div>
                </div>
                <div>
                    <img className='moneydog-img' src={moneydog} alt="" srcset="" />
                </div>
            </div>
        </div>

        <div className='merchandise-section'>
                <h1 className='merchandise-title'>merchandise</h1>
                <MerchandiseSlider/>
        </div>

        <div className='games-section-background'>
            <h1 className='games-title'>GAMES</h1>
            <h1 className='games-text'>Stay tuned for upcoming games !</h1>


            <div className='games-slider'>
                <GamesSlider/>
            </div>
        </div>

        <div className='game-preview-section'>
            <h1 className='game-preview-title'>GAME <span> PREVIEWS</span></h1>
            <GamePreviewSlider/>
        </div>

        <div className='footer'>
            <h1 className='footer-title'>social media <br />
            links</h1>
        </div>

        <div className='footer-content'>
            <div className='footer-text'>
            <div className='footer-social-box'>
                <div className='box-social'>
                <img className='social-twitter' src={twitter} alt="" srcset="" />
                <h1 className='social-text'>Twitter Link </h1><br />
                </div>
                <div className='box-social'>
                <img className='social-telegram' src={telegram} alt="" srcset="" />
                <h1  className='social-text'>Telegram Link</h1> <br />
                </div>
            </div>
            </div>

            <div className='footer-img'>
                <img className='footer-img' src={social} alt="" srcset="" />
            </div>
        </div>

    </div>
    </div>
</>
    )
}

export default Homepage;