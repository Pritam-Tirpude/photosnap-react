import { React, useEffect } from "react";
import FeatureStyle from "../styles/FeaturesStyle";
import FeatureBackgroundDesktop from "../images/features-bg.jpg";
import FeatureBackgroundMobile from "../images/features-bg-mobile.jpg";
import ResponsiveSvg from "../images/responsive.svg";
import UploadLimitSvg from "../images/no-limit.svg";
import EmbedSvg from "../images/embed.svg";
import CustomSvg from "../images/custom.svg";
import BoostSvg from "../images/boost.svg";
import DragSvg from "../images/drag.svg";
import ArrowWhiteSvg from "../images/arrow-white.svg";
import { pageAnimation } from "../animation";
import Aos from "aos";
import "../aos.css";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <FeatureStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="feature-intro">
        <div className="feature-text">
          <h2 data-aos="fade-up">Features</h2>
          <p data-aos="fade-up">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
        <div className="feature-img">
          <img
            src={FeatureBackgroundDesktop}
            alt="Phographer with Camera"
            className="feature-desktop"
            data-aos="zoom-out"
          />
          <img
            src={FeatureBackgroundMobile}
            alt="Phographer with Camera"
            className="feature-mobile"
            data-aos="zoom-out"
          />
        </div>
      </div>
      <div className="features-photosnap">
        <div className="features-top">
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
        <div className="features-bottom">
          <div className="custom-domain" data-aos="fade-right">
            <img src={CustomSvg} alt="Custom Domain" />
            <h4>Custom Domain</h4>
            <p>
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </div>
          <div
            className="boost-experience"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img src={BoostSvg} alt="Boost Experience" />
            <h4>Boost Your Experience</h4>
            <p>
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </div>
          <div className="drag-drop" data-aos="fade-right" data-aos-delay="150">
            <img src={DragSvg} alt="Drag Drop" />
            <h4>Drag & Drop Image</h4>
            <p>
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </div>
        </div>
      </div>
      <div className="beta">
        <div className="beta-text">
          <h2 data-aos="fade-right">
            We're in beta. <br /> get your invite <br />
            today!
          </h2>
        </div>
        <div className="invite-link" data-aos="fade-left" data-aos-delay="150">
          <a href="#">Get an Invite</a>
          <img src={ArrowWhiteSvg} alt="Arrow Icon" />
        </div>
      </div>
    </FeatureStyle>
  );
};

export default Features;
