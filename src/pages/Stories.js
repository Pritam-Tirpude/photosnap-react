import { React, useEffect } from "react";
import StoriesStyled from "../styles/StoriesStyle";
import ArrowWhiteSvg from "../images/arrow-white.svg";
import MountainImageDesktop from "../images/mountains.jpg";
import MountainImageMobile from "../images/mountains-m.jpg";
import SunsetCityScapesDesktop from "../images/cityscapes.jpg";
import SunsetCityScapesMobile from "../images/cityscapes-m.jpg";
import VoyageImageDesktop from "../images/18-days-voyage.jpg";
import VoyageImageMobile from "../images/18-days-voyage-m.jpg";
import ArchitecturalsImageDesktop from "../images/architecturals.jpg";
import ArchitecturalsImageMobile from "../images/architecturals-m.jpg";
import WorldTourDesktop from "../images/world-tour.jpg";
import WorldTourMobile from "../images/world-tour-m.jpg";
import UnforeseenCornersDesktop from "../images/unforeseen-corners.jpg";
import UnforeseenCornersMobile from "../images/unforeseen-corners-m.jpg";
import KingOnAfricaDesktop from "../images/king-on-africa.jpg";
import KingOnAfricaMobile from "../images/king-on-africa-m.jpg";
import TripToNowhereDesktop from "../images/trip-to-nowhere.jpg";
import TripToNowhereMobile from "../images/trip-to-nowhere-m.jpg";
import RageOfSeaDesktop from "../images/rage-of-the-sea.jpg";
import RageOfSeaMobile from "../images/rage-of-the-sea-m.jpg";
import RunningFreeDesktop from "../images/running-free.jpg";
import RunningFreeMobile from "../images/running-free-m.jpg";
import BehindTheWavesDesktop from "../images/behind-the-waves.jpg";
import BehindTheWavesMobile from "../images/behind-the-waves-m.jpg";
import CalmWaterDesktop from "../images/calm-waters.jpg";
import CalmWaterMobile from "../images/calm-waters-m.jpg";
import MilkyWayDesktop from "../images/milky-way.jpg";
import MilkyWayMobile from "../images/milky-way-m.jpg";
import DarkForestDesktop from "../images/dark-forest.jpg";
import DarkForestMobile from "../images/dark-forest-m.jpg";
import SomwarpetDesktop from "../images/somwarpet.jpg";
import SomwarpetMobile from "../images/somwarpet-m.jpg";
import LandOfDreamsDesktop from "../images/land-of-dreams.jpg";
import LandOfDreamsMobile from "../images/land-of-dreams-m.jpg";
import MoonAppalaciaMobile from "../images/moon-of-appalacia-mobile.jpg";
import { pageAnimation } from "../animation";
import Aos from "aos";
import "../aos.css";

const Stories = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <StoriesStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="intro-header">
        <div className="intro-img">
          <img
            src={MoonAppalaciaMobile}
            alt="Moon Appalacia"
            className="moon-mobile"
            data-aos="zoom-out"
          />
        </div>
        <div className="intro-text">
          <span class="intro-top-text" data-aos="fade-up">
            Last Month's Featured Story
          </span>
          <h3 data-aos="fade-up">
            Hazzy Full <br /> Moon of <br /> Appalachia
          </h3>
          <p data-aos="fade-up">
            <span class="month-text">March 2nd 2020</span> by John Applessed
          </p>
          <p class="grey-para" data-aos="fade-up">
            The dissected plateau area, while not actually made up of <br />{" "}
            geological mountains, is popularly called "mountains," <br />{" "}
            especially in eastern Kentucky and West Virginia, and <br /> while
            the ridges are not high, the terrain is extremely <br /> rugged.
          </p>
          <div className="inivite-link" data-aos="fade-up">
            <a href="#">Get an Invite</a>
            <img src={ArrowWhiteSvg} alt="Arrow Icon" />
          </div>
        </div>
      </div>
      <div className="stories-card-container">
        <div className="card" data-aos="fade">
          <div className="card-img">
            <img
              src={MountainImageDesktop}
              alt="Mountain"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={MountainImageMobile}
              alt="Mountain"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 16th 2020</span>
              <h4>The Mountains</h4>
              <span>By Jhon Appleseed</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={SunsetCityScapesDesktop}
              alt="Sunset CityScapes"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={SunsetCityScapesMobile}
              alt="Sunset CityScapes"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">April 14th 2020</span>
              <h4>Sunset Cityscapes</h4>
              <span>By Benjamin Cruz</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={VoyageImageDesktop}
              alt="Voyage"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={VoyageImageMobile}
              alt="Voyage"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">April 11th 2020</span>
              <h4>18 Days Voyage</h4>
              <span>By Alexei Borodin</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={ArchitecturalsImageDesktop}
              alt="Architectural"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={ArchitecturalsImageMobile}
              alt="Architectural"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">April 9th 2020</span>
              <h4>Architecturals</h4>
              <span>By Samantha Brooke</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={WorldTourDesktop}
              alt="World Tour"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={WorldTourMobile}
              alt="World Tour"
              data-aos="zoom-out"
              className="card-mobile"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">April 7th 2020</span>
              <h4>World Tour 2019</h4>
              <span>By Timothy Wagner</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={UnforeseenCornersDesktop}
              alt="Unforeseen Corner"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={UnforeseenCornersMobile}
              alt="Unforeseen Corner"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">April 3rd 2020</span>
              <h4>Unforeseen Corners</h4>
              <span>By William Malcolm</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={KingOnAfricaDesktop}
              alt="King On Africa"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={KingOnAfricaMobile}
              alt="King On Africa"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 29th 2020</span>
              <h4>King on Africa: Part II</h4>
              <span>By Tim Hillenberg</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={TripToNowhereDesktop}
              alt="Trip to Nowhere"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={TripToNowhereMobile}
              alt="Trip to Nowhere"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">April 21st 2020</span>
              <h4>The Trip to Nowhere</h4>
              <span>By Felicia Rourke</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={RageOfSeaDesktop}
              alt="Rage of Sea"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={RageOfSeaMobile}
              alt="Rage of Sea"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 19th 2020</span>
              <h4>Rage of The Sea</h4>
              <span>By Mohammed Abdul</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={RunningFreeDesktop}
              alt="Running Free"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={RunningFreeMobile}
              alt="Running Free"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 16th 2020</span>
              <h4>Running Free</h4>
              <span>By Michelle</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={BehindTheWavesDesktop}
              alt="Wave"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={BehindTheWavesMobile}
              alt="Wave"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 11th 2020</span>
              <h4>Behind the Waves</h4>
              <span>By Lamarr Wilson</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={CalmWaterDesktop}
              alt="Calm Water"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={CalmWaterMobile}
              alt="Calm Water"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 9th 2020</span>
              <h4>Calm Waters</h4>
              <span>By Samantha Brooke</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={MilkyWayDesktop}
              alt="Milky Way"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={MilkyWayMobile}
              alt="Milky Way"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 5th 2020</span>
              <h4>The Milky Way</h4>
              <span>By Benjamin Cruz</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={DarkForestDesktop}
              alt="Dark Forest"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={DarkForestMobile}
              alt="Dark Forest"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 4th 2020</span>
              <h4>Night at The Dark Forest</h4>
              <span>By Mohammad Abdul</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={SomwarpetDesktop}
              alt="Somwarpet"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={SomwarpetMobile}
              alt="Somwarpet"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">March 1st 2020</span>
              <h4>Somwarpet's Beauty</h4>
              <span>By Michelle</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src={LandOfDreamsDesktop}
              alt="Land Of Dreams"
              className="card-desktop"
              data-aos="zoom-out"
            />
            <img
              src={LandOfDreamsMobile}
              alt="Land Of Dreams"
              className="card-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="card-text" data-aos="fade-up">
            <div className="author-name">
              <span className="date">Fevruary 25th 2020</span>
              <h4>Land of Dreams</h4>
              <span>By William Malcolm</span>
              <div className="line"></div>
            </div>
            <div className="card-story">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </StoriesStyled>
  );
};

export default Stories;
