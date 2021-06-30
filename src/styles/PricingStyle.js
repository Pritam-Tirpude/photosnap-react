import styled from "styled-components";
import BackgroundBetaDesktop from "../images/bg-beta.jpg";
import BackgroundBetaMobile from "../images/bg-beta-mobile.jpg";
import { motion } from "framer-motion";

const PricingStyle = styled(motion.div)`
  .pricing-intro {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .pricing-text {
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

  .pricing-img {
    flex: 1 0 60%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      .pricing-desktop {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .pricing-mobile {
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
      }
    }

    .pricing-tablet {
      display: none;
    }
  }

  .pricing-cards-container {
    padding-top: 10rem;
  }

  .toggle-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .label {
      position: relative;
      background: #dfdfdf;
      display: inline-block;
      margin: 0 30px;
      width: 60px;
      height: 30px;
      border-radius: 50px;
      cursor: pointer;
      animation: slideOff 0.3s linear forwards;

      .ball {
        position: absolute;
        width: 25px;
        height: 25px;
        background: #000000;
        border-radius: 50%;
        top: 3px;
        left: 3px;
        animation: slideOff 0.3s linear forwards;
      }
    }

    span {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .toggle {
      visibility: hidden;
    }

    .toggle::checked + .label {
    }

    .toggle:checked + .label .ball {
      animation: slideOn 0.3s linear forwards;
    }
  }

  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding: 5rem 10rem;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      padding: 5rem 5rem;
    }
  }

  .price-card-basic {
    background: #f5f5f5;
    padding: 5rem 4rem;
    text-align: center;
    height: 430px;

    h4 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: rgba(0, 0, 0, 0.6);
      padding-top: 3rem;
    }

    .price {
      padding-top: 3rem;
      font-size: 5rem;
    }
    .basic-month {
      color: rgba(0, 0, 0, 0.6);
      font-size: 1.5rem;
    }
    .yearly-price,
    .year-text {
      display: none;
    }

    .plan-btn {
      margin: 5rem auto;
      border: none;
      background: #000000;
      color: #ffffff;
      cursor: pointer;
      width: 100%;
      padding: 1rem 2rem;
      text-transform: uppercase;
      transition: background 0.5s ease;

      &:hover {
        background: #dfdfdf;
        color: #000000;
      }
    }
  }

  .price-card-basic.pro {
    background: #000000;
    height: 500px;
    position: relative;
    padding-top: 84px;
    transform: translateY(-35px);

    @media screen and (max-width: 768px) {
      transform: translateY(0px);
    }

    h4 {
      color: #ffffff;
    }

    p {
      color: rgba(223, 223, 223, 0.6);
    }

    .price {
      color: #ffffff;
    }
    .basic-month {
      color: rgba(223, 223, 223, 0.6);
    }

    .plan-btn {
      background: #ffffff;
      color: #000000;

      &:hover {
        background: #dfdfdf;
      }
    }
  }

  .price-card-basic.pro::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
    top: 0;
    left: 0;
  }

  .compare-section {
    padding: 5rem 10rem;

    @media screen and (max-width: 768px) {
      padding: 5rem 5rem;
    }
  }

  .compare-heading {
    text-align: center;
    h2 {
      font-size: 4rem;
      text-transform: uppercase;
    }
  }

  .compare-table {
    padding-top: 5rem;
    max-width: 700px;
    margin: 0 auto;
  }

  .compare-table-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: #000000;
      top: 20px;
    }
  }

  .table-title {
    h4 {
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
    }
  }

  .compare-sub-title {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 768px) {
      justify-content: space-evenly;
      width: 60%;
    }

    li {
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      font-weight: bold;
    }
  }

  .benefits {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: #dfdfdf;
      top: 60px;
    }
  }

  .benefits.margn {
    margin-top: 1.5rem;
  }

  .feature-benefit-title {
    h4 {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
  }

  .the-ticks {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 768px) {
      justify-content: space-evenly;
      width: 100%;
    }

    .tick-one {
      position: relative;
      left: 20px;
    }

    .tick-two {
      position: relative;
      left: -20px;
    }

    .tick-two.misalign {
      position: relative;
      left: -10px;
    }

    .tick-three {
      position: relative;
      left: -40px;
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
    margin-top: 5rem;

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

  @keyframes slideOn {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(30px);
    }
  }

  @keyframes slideOff {
    0% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default PricingStyle;
