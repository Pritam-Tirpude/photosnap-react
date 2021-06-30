import React from "react";
import PhotoSnapLogo from "../images/logo-white.svg";
import WhiteFBSvg from "../images/white-FB.svg";
import WhiteInstaSvg from "../images/white-Insta.svg";
import WhitePinSvg from "../images/white-Pin.svg";
import WhiteTwSvg from "../images/white-Tw.svg";
import WhiteYTSvg from "../images/white-YT.svg";
import FooterStyle from "../styles/FooterStyle";
import ArrowWhiteSvg from "../images/arrow-white.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-logo-social">
        <div className="logo">
          <a href="#">
            <img src={PhotoSnapLogo} alt="Photosnap Logo" />
          </a>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src={WhiteFBSvg} alt="Facebook" />
          </a>
          <a href="#">
            <img src={WhiteYTSvg} alt="Youtube" />
          </a>
          <a href="#">
            <img src={WhiteTwSvg} alt="Twitter" />
          </a>
          <a href="#">
            <img src={WhitePinSvg} alt="Pinterest" />
          </a>
          <a href="#">
            <img src={WhiteInstaSvg} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-nav-site">
        <ul className="footer-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="footer-invite">
        <div className="invite-link">
          <a href="#">Get an Invite</a>
          <img src={ArrowWhiteSvg} alt="Arrow Icon" />
        </div>
        <div className="copyright-content">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
