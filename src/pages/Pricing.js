import { React, useEffect } from "react";
import PricingStyle from "../styles/PricingStyle";
import ArrowWhiteSvg from "../images/arrow-white.svg";
import BackgroundPricingDesktop from "../images/pricing-bg.jpg";
import BackgroundPricingMobile from "../images/pricing-bg-mobile.jpg";
import CheckSvg from "../images/check.svg";
import { pageAnimation } from "../animation";
import Aos from "aos";
import "../aos.css";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function changePrice() {
    const toggleInput = document.querySelector(".toggle");
    const monthPrice = document.querySelectorAll(".monthly-price");
    const yearlyPrice = document.querySelectorAll(".yearly-price");
    const monthText = document.querySelectorAll(".month-text");
    const yearText = document.querySelectorAll(".year-text");

    toggleInput.addEventListener("change", (e) => {
      if (e.target.checked) {
        yearlyPrice.forEach((yrPrice) => {
          yrPrice.style.display = "block";
        });

        yearText.forEach((yrText) => {
          yrText.style.display = "block";
        });

        monthPrice.forEach((mnPrice) => {
          mnPrice.style.display = "none";
        });

        monthText.forEach((mnText) => {
          mnText.style.display = "none";
        });
      } else {
        yearlyPrice.forEach((yrPrice) => {
          yrPrice.style.display = "none";
        });

        yearText.forEach((yrText) => {
          yrText.style.display = "none";
        });

        monthPrice.forEach((mnPrice) => {
          mnPrice.style.display = "block";
        });

        monthText.forEach((mnText) => {
          mnText.style.display = "block";
        });
      }
    });
  }

  return (
    <PricingStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="pricing-intro">
        <div className="pricing-text">
          <h2 data-aos="fade-up">Pricing</h2>
          <p data-aos="fade-up">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
        <div className="pricing-img">
          <img
            src={BackgroundPricingDesktop}
            alt="Phographer with Camera"
            className="pricing-desktop"
            data-aos="zoom-out"
          />
          <img
            src={BackgroundPricingMobile}
            alt="Phographer with Camera"
            className="pricing-mobile"
            data-aos="zoom-out"
          />
        </div>
      </div>
      <div className="pricing-cards-container">
        <div className="toggle-container">
          <span>Monthly</span>
          <span>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="toggle"
              onClick={changePrice}
            />
            <label htmlFor="checkbox" className="label">
              <div class="ball"></div>
            </label>
          </span>
          <span>Yearly</span>
        </div>
        <div className="pricing-cards">
          <div className="price-card-basic">
            <h4>Basic</h4>
            <p>
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <h2 className="price">
              <span className="monthly-price">$19.00</span>
              <span className="yearly-price">$190.00</span>
            </h2>
            <div className="basic-month">
              <span className="month-text">per month</span>
              <span className="year-text">per year</span>
            </div>
            <button className="plan-btn">Pick Plan</button>
          </div>
          <div className="price-card-basic pro">
            <h4>Pro</h4>
            <p>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <h2 className="price">
              <span className="monthly-price">$39.00</span>
              <span className="yearly-price">$390.00</span>
            </h2>
            <div className="basic-month">
              <span className="month-text">per month</span>
              <span className="year-text">per year</span>
            </div>
            <button className="plan-btn">Pick Plan</button>
          </div>
          <div className="price-card-basic">
            <h4>Business</h4>
            <p>
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <h2 className="price">
              <span className="monthly-price">$99.00</span>
              <span className="yearly-price">$990.00</span>
            </h2>
            <div className="basic-month">
              <span className="month-text">per month</span>
              <span className="year-text">per year</span>
            </div>
            <button className="plan-btn">Pick Plan</button>
          </div>
        </div>
        <div className="compare-section">
          <div className="compare-heading">
            <h2>Compare</h2>
          </div>
          <div className="compare-table">
            <div className="compare-table-head">
              <div className="table-title">
                <h4>The Features</h4>
              </div>
              <ul className="compare-sub-title">
                <li>Basic</li>
                <li>Pro</li>
                <li>Business</li>
              </ul>
            </div>
            <div className="benefits">
              <div className="feature-benefit-title">
                <h4>Unlimited Story Posting</h4>
              </div>
              <ul className="the-ticks">
                <li className="tick-one">
                  <img src={CheckSvg} alt="tick" />
                </li>
                <li className="tick-two">
                  <img src={CheckSvg} alt="tick" />
                </li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Unlimited Photo Upload</h4>
              </div>
              <ul className="the-ticks">
                <li className="tick-one">
                  <img src={CheckSvg} alt="tick" />
                </li>
                <li className="tick-two">
                  <img src={CheckSvg} alt="tick" />
                </li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Embedding Custom Content</h4>
              </div>
              <ul className="the-ticks">
                <li></li>
                <li className="tick-two misalign">
                  <img src={CheckSvg} alt="tick" />
                </li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Customize Metadata</h4>
              </div>
              <ul className="the-ticks">
                <li></li>
                <li className="tick-two misalign">
                  <img src={CheckSvg} alt="tick" />
                </li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Advanced Metrics</h4>
              </div>
              <ul className="the-ticks">
                <li></li>
                <li></li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Photo Downloads</h4>
              </div>
              <ul className="the-ticks">
                <li></li>
                <li></li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Search Engine Indexing</h4>
              </div>
              <ul className="the-ticks">
                <li></li>
                <li></li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
            </div>
            <div className="benefits margn">
              <div className="feature-benefit-title">
                <h4>Custom Analytics</h4>
              </div>
              <ul className="the-ticks">
                <li></li>
                <li></li>
                <li className="tick-three">
                  <img src={CheckSvg} alt="tick" />
                </li>
              </ul>
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
          <div className="invite-link" data-aos="fade-left">
            <a href="#">Get an Invite</a>
            <img src={ArrowWhiteSvg} alt="Arrow Icon" />
          </div>
        </div>
      </div>
    </PricingStyle>
  );
};

export default Pricing;
