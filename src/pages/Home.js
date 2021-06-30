import { React, useEffect } from "react";
import HomeStyled from "../styles/HomeStyle";
import ArrowWhiteSvg from "../images/arrow-white.svg";
import ArrowBlackSvg from "../images/arrow-black.svg";
import CreateShareImageDesktop from "../images/create-and-share.jpg";
import CreateShareImageMobile from "../images/create-and-share-mobile.jpg";
import BeautifulStoriesImageDesktop from "../images/beautiful-stories.jpg";
import BeautifulStoriesImageMobile from "../images/beautiful-stories-mobile.jpg";
import DesignedForEveryoneDesktop from "../images/designed-for-everyone.jpg";
import DesignedForEveryoneMobile from "../images/designed-for-everyone-mobile.jpg";
import MountainImageDesktop from "../images/mountains.jpg";
import MountainImageMobile from "../images/mountains-m.jpg";
import SunsetCityScapesDesktop from "../images/cityscapes.jpg";
import SunsetCityScapesMobile from "../images/cityscapes-m.jpg";
import VoyageImageDesktop from "../images/18-days-voyage.jpg";
import VoyageImageMobile from "../images/18-days-voyage-m.jpg";
import ArchitecturalsImageDesktop from "../images/architecturals.jpg";
import ArchitecturalsImageMobile from "../images/architecturals-m.jpg";
import ResponsiveSvg from "../images/responsive.svg";
import UploadLimitSvg from "../images/no-limit.svg";
import EmbedSvg from "../images/embed.svg";
import Aos from "aos";
import "../aos.css";
import { pageAnimation } from "../animation";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <HomeStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="photo-stories">
        <div className="photo-text">
          <div className="hide">
            <h3 data-aos="fade-up">Create and share your photo stories.</h3>
          </div>
          <p data-aos="fade-up">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="invite-link" data-aos="fade-up">
            <a href="#">Get an Invite</a>
            <img src={ArrowWhiteSvg} alt="Arrow Icon" />
          </div>
          <div className="gradient-line"></div>
        </div>
        <div className="photo-img">
          <img
            src={CreateShareImageDesktop}
            alt="Create Share"
            className="desktop-create"
            data-aos="zoom-out"
          />
          <img
            src={CreateShareImageMobile}
            alt="Create Share"
            className="mobile-create"
            data-aos="zoom-out"
          />
        </div>
      </div>
      <div className="beautiful-stories" data-aos="fade">
        <div className="beautiful-img">
          <img
            src={BeautifulStoriesImageDesktop}
            alt="Beautiful Stories"
            className="beautiful-desktop"
            data-aos="zoom-out"
          />
          <img
            src={BeautifulStoriesImageMobile}
            alt="Beautiful Stories"
            className="beautiful-mobile"
            data-aos="zoom-out"
          />
        </div>
        <div className="beautiful-text">
          <h3 data-aos="fade-up">Beautiful Stories everytime</h3>
          <p data-aos="fade-up">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="invite-link-beautiful" data-aos="fade-up">
            <a href="#">View the Stories</a>
            <img src={ArrowBlackSvg} alt="Arrow Icon" />
          </div>
        </div>
      </div>
      <div className="designed-stories" data-aos="fade">
        <div className="designed-text">
          <h3 data-aos="fade-up">Designed for everyone</h3>
          <p data-aos="fade-up">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="invite-link-designed" data-aos="fade-up">
            <a href="#">View the Stories</a>
            <img src={ArrowBlackSvg} alt="Arrow Icon" />
          </div>
        </div>
        <div className="designed-img">
          <img
            src={DesignedForEveryoneDesktop}
            alt="Photographer"
            className="designed-desktop"
            data-aos="zoom-out"
          />
          <img
            src={DesignedForEveryoneMobile}
            alt="Photographer"
            className="designed-mobile"
            data-aos="zoom-out"
          />
        </div>
      </div>
      <div className="viewer-stories" data-aos="fade">
        <div className="the-mountains">
          <div className="mountain-img">
            <img
              src={MountainImageDesktop}
              alt="Mountain"
              className="mountain-desktop"
              data-aos="zoom-out"
            />
            <img
              src={MountainImageMobile}
              alt="Mountain"
              className="mountain-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="author-mountain-text" data-aos="fade-up">
            <div className="author-name">
              <h4>The Mountains</h4>
              <span>By Jhon Appleseed</span>
              <div className="line"></div>
            </div>
            <div className="read-story-mountain">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="sunset-citycscapes">
          <div className="sunset-img">
            <img
              src={SunsetCityScapesDesktop}
              alt="Sunset CityScapes"
              className="sunset-desktop"
              data-aos="zoom-out"
            />
            <img
              src={SunsetCityScapesMobile}
              alt="Sunset CityScapes"
              className="sunset-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="sunset-text" data-aos="fade-up">
            <div className="author-name">
              <h4>Sunset Cityscapes</h4>
              <span>By Benjamin Cruz</span>
              <div className="line"></div>
            </div>
            <div className="read-story-sunset">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="voyage">
          <div className="voyage-img">
            <img
              src={VoyageImageDesktop}
              alt="Voyage"
              className="voyage-desktop"
              data-aos="zoom-out"
            />
            <img
              src={VoyageImageMobile}
              alt="Voyage"
              className="voyage-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="voyage-text" data-aos="fade-up">
            <div className="author-name">
              <h4>18 Days Voyage</h4>
              <span>By Alexei Borodin</span>
              <div className="line"></div>
            </div>
            <div className="read-story-voyage">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="architecturals">
          <div className="architecturals-img">
            <img
              src={ArchitecturalsImageDesktop}
              alt="Architecturals"
              className="architecture-desktop"
              data-aos="zoom-out"
            />
            <img
              src={ArchitecturalsImageMobile}
              alt="Architecturals"
              className="architecture-mobile"
              data-aos="zoom-out"
            />
          </div>
          <div className="architecturals-text" data-aos="fade-up">
            <div className="author-name">
              <h4>Architecturals</h4>
              <span>By Samantha Brooke</span>
              <div className="line"></div>
            </div>
            <div className="read-story-architecturals">
              <a href="#">Read Story</a>
              <img src={ArrowWhiteSvg} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="photosnap-features">
        <div className="responsive" data-aos="fade-right">
          <img src={ResponsiveSvg} alt="100% Responsive" />
          <h4>100% Responsive</h4>
          <p>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div
          className="upload-limit"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src={UploadLimitSvg} alt="Upload Limit" />
          <h4>No Photo Upload Limit</h4>
          <p>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="embed" data-aos="fade-right" data-aos-delay="150">
          <img src={EmbedSvg} alt="Embed" />
          <h4>Available to Embed</h4>
          <p>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </HomeStyled>
  );
};

export default HomePage;
