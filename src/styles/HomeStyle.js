import styled from "styled-components";
import { motion } from "framer-motion";

const HomeStyled = styled(motion.div)`
  .photo-stories {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }

  .photo-text {
    grid-column: 1 / span 2;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10rem 10rem;
    position: relative;

    .hide {
      overflow: hidden;
    }

    @media screen and (max-width: 768px) {
      padding: 10rem 5rem;
    }

    h3 {
      color: #ffffff;
      font-size: 4rem;
      text-transform: uppercase;
      padding-bottom: 3rem;
    }

    p {
      color: #dfdfdf;
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    .invite-link {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      align-self: flex-start;
      padding-top: 3rem;
      gap: 15px;

      a {
        font-size: 1.5rem;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        text-decoration: none;
      }
    }

    .gradient-line {
      position: absolute;
      width: 5px;
      height: 300px;
      background: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
      left: 0;

      @media screen and (max-width: 768px) {
        top: -48px;
        left: 100px;
        transform: rotate(90deg);
        height: 100px;
      }
    }
  }

  .photo-img {
    grid-column: 3 / span 4;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mobile-create {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        width: 100vw;
      }
    }

    .tablet-create {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .desktop-create {
        display: none;
      }
    }
  }

  .beautiful-stories {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .beautiful-img {
      grid-column: 1 / span 3;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .beautiful-mobile {
        display: none;
      }
      .beautiful-tablet {
        display: none;
      }

      @media screen and (max-width: 768px) {
        .beautiful-desktop {
          display: none;
        }
        .beautiful-mobile {
          display: block;
          width: 100vw;
        }
      }
    }

    .beautiful-text {
      grid-column: span 2;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0rem 10rem;

      @media screen and (max-width: 768px) {
        padding: 10rem 5rem;
      }

      h3 {
        color: #000000;
        font-size: 4rem;
        text-transform: uppercase;
        padding-bottom: 3rem;
      }

      p {
        color: rgba(0, 0, 0, 0.6);
        font-size: 1.5rem;
        line-height: 2.5rem;
      }

      .invite-link-beautiful {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        align-self: flex-start;
        padding-top: 3rem;
        gap: 15px;

        a {
          font-size: 1.5rem;
          color: #000000;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          text-decoration: none;
        }
      }
    }
  }

  .designed-stories {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    .designed-text {
      grid-column: 1 / span 2;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0rem 10rem;

      @media screen and (max-width: 768px) {
        padding: 10rem 5rem;
      }

      h3 {
        color: #000000;
        font-size: 4rem;
        text-transform: uppercase;
        padding-bottom: 3rem;
      }

      p {
        color: rgba(0, 0, 0, 0.6);
        font-size: 1.5rem;
        line-height: 2.5rem;
      }

      .invite-link-designed {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        align-self: flex-start;
        padding-top: 3rem;
        gap: 15px;

        a {
          font-size: 1.5rem;
          color: #000000;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          text-decoration: none;
        }
      }
    }

    .designed-img {
      grid-column: 3 / span 4;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .designed-mobile {
        display: none;
      }
      .designed-tablet {
        display: none;
      }

      @media screen and (max-width: 768px) {
        .designed-desktop {
          display: none;
        }
        .designed-mobile {
          display: block;
          width: 100vw;
        }
      }
    }
  }

  .viewer-stories {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .the-mountains {
      position: relative;

      .mountain-img {
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mountain-mobile {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .mountain-desktop {
            display: none;
          }

          .mountain-mobile {
            display: block;
            width: 100vw;
          }
        }
      }

      .mountain-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        );
      }

      .author-mountain-text {
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

        span {
          color: #dfdfdf;
        }

        .line {
          margin-top: 1rem;
          width: 100%;
          height: 1px;
          background: #dfdfdf;
        }

        .read-story-mountain {
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

    .sunset-citycscapes {
      position: relative;

      .sunset-img {
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sunset-mobile {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .sunset-desktop {
            display: none;
          }

          .sunset-mobile {
            display: block;
            width: 100vw;
          }
        }
      }

      .sunset-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        );
      }

      .sunset-text {
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

        span {
          color: #dfdfdf;
        }

        .line {
          margin-top: 1rem;
          width: 100%;
          height: 1px;
          background: #dfdfdf;
        }

        .read-story-sunset {
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

    .voyage {
      position: relative;

      .voyage-img {
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .voyage-mobile {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .voyage-desktop {
            display: none;
          }

          .voyage-mobile {
            display: block;
            width: 100vw;
          }
        }
      }

      .voyage-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        );
      }

      .voyage-text {
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

        span {
          color: #dfdfdf;
        }

        .line {
          margin-top: 1rem;
          width: 100%;
          height: 1px;
          background: #dfdfdf;
        }

        .read-story-voyage {
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

    .architecturals {
      position: relative;

      .architecturals-img {
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .architecture-mobile {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .architecture-desktop {
            display: none;
          }

          .architecture-mobile {
            display: block;
            width: 100vw;
          }
        }
      }

      .architecturals-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        );
      }

      .architecturals-text {
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

        span {
          color: #dfdfdf;
        }

        .line {
          margin-top: 1rem;
          width: 100%;
          height: 1px;
          background: #dfdfdf;
        }

        .read-story-architecturals {
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

  .photosnap-features {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 10rem 10rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 10rem 5rem;
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
        margin-top: 3rem;
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
        margin-top: 3rem;
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
`;

export default HomeStyled;
