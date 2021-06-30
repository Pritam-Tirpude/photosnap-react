import styled from "styled-components";
import MoonAppalaciaDesktop from "../images/moon-of-appalacia.jpg";
import MoonAppalaciaTablet from "../images/moon-of-appalacia-tablet.jpg";
import { motion } from "framer-motion";

const StoriesStyled = styled(motion.div)`
  .intro-header {
    background: url(${MoonAppalaciaDesktop}) no-repeat center/cover;
    min-height: 100vh;
    padding: 10rem 10rem;

    @media screen and (max-width: 768px) {
      background: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0rem;
    }
  }

  .intro-img {
    .moon-mobile {
      display: none;
    }
    @media screen and (max-width: 768px) {
      .moon-mobile {
        display: block;
        width: 100vw;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .intro-text {
    @media screen and (max-width: 768px) {
      background: #000000;
      width: 100%;
      padding: 5rem 3rem;
    }
    .intro-top-text {
      display: inline-block;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.5rem;
      letter-spacing: 0.2rem;
      padding-bottom: 2rem;
    }

    h3 {
      color: #ffffff;
      font-size: 4rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
    }

    .month-text {
      color: rgba(223, 223, 223, 0.6);
    }

    p {
      color: #ffffff;
      font-size: 1.5rem;
      padding-top: 2rem;
    }

    .grey-para {
      color: rgba(223, 223, 223, 0.6);
      line-height: 2.5rem;
    }

    .inivite-link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      gap: 15px;
      padding-top: 3rem;
      a {
        font-size: 1.5rem;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        text-decoration: none;
      }
    }
  }

  .stories-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .card {
      position: relative;

      .card-img {
        display: flex;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-mobile {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .card-desktop {
            display: none;
          }

          .card-mobile {
            display: block;
            width: 100vw;
          }
        }
      }

      .card-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        );
      }

      .card-text {
        position: absolute;
        bottom: 20px;
        padding: 0rem 3rem;
        width: 100%;

        @media screen and (max-width: 768px) {
          padding: 3rem 5rem;
        }

        h4 {
          color: #ffffff;
          font-size: 2rem;
          font-weight: lighter;
        }

        .date {
          color: #ffffff;
        }

        span {
          color: #dfdfdf;
          font-size: 1.3rem;
        }

        .line {
          margin-top: 1rem;
          width: 100%;
          height: 1px;
          background: #dfdfdf;
        }

        .card-story {
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          a {
            font-size: 1.3rem;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            text-decoration: none;
          }
        }
      }
    }
  }
`;
export default StoriesStyled;
