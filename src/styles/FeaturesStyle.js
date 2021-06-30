import styled from "styled-components";
import BackgroundBetaDesktop from "../images/bg-beta.jpg";
import BackgroundBetaMobile from "../images/bg-beta-mobile.jpg";
import BackgroundBetaTablet from "../images/bg-beta-tablet.jpg";
import { motion } from "framer-motion";

const FeatureStyle = styled(motion.div)`
  .feature-intro {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .feature-text {
    background: #000000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 40%;
    padding: 0rem 10rem;

    @media screen and (max-width: 768px) {
      padding: 10rem 10rem;
    }

    h2 {
      align-self: flex-start;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      font-size: 4rem;
      padding-bottom: 3rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: rgba(223, 223, 223, 0.6);
    }
  }

  .feature-img {
    flex: 1 0 60%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .feature-mobile {
      display: none;
    }

    .feature-tablet {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .feature-desktop {
        display: none;
      }
      .feature-mobile {
        display: block;
      }
    }
  }

  .features-photosnap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10rem 10rem;

    @media screen and (max-width: 768px) {
      padding: 10rem 5rem;
    }
  }

  .features-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .responsive {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h4 {
        padding-top: 5rem;
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 2.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .upload-limit {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      align-self: flex-end;

      @media screen and (max-width: 768px) {
        margin-top: 5rem;
      }

      h4 {
        padding-top: 5rem;
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 2.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .embed {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media screen and (max-width: 768px) {
        margin-top: 5rem;
      }

      h4 {
        padding-top: 5rem;
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 2.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .features-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-top: 5rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .custom-domain {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h4 {
        padding-top: 5rem;
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 2.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .boost-experience {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media screen and (max-width: 768px) {
        margin-top: 5rem;
      }

      h4 {
        padding-top: 5rem;
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 2.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .drag-drop {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media screen and (max-width: 768px) {
        margin-top: 5rem;
      }

      h4 {
        padding-top: 5rem;
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 2.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .beta {
    background: url(${BackgroundBetaDesktop}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-height: 50vh;
    padding: 0rem 10rem;
    position: relative;

    @media screen and (max-width: 768px) {
      padding: 0rem 5rem;
      background: url(${BackgroundBetaMobile}) no-repeat center/cover;
      justify-content: center;
      flex-direction: column;
      br {
        display: none;
      }
    }
  }

  .beta::after {
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
  }

  .beta-text {
    h2 {
      color: #ffffff;
      font-size: 4rem;
      letter-spacing: 0.4rem;
      text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 3rem;
      }
    }
  }

  .invite-link {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-top: 5rem;
    }

    a {
      font-size: 1.5rem;
      color: #ffffff;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      text-decoration: none;
    }
  }
`;

export default FeatureStyle;
