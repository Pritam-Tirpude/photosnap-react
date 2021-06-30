import React from "react";
import Logo from "../images/logo.svg";
import NavStyle from "../styles/NavStyle";
import { Link } from "react-router-dom";

const Nav = () => {
  const hamburger = () => {
    const hamburgerMenu = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  };
  return (
    <NavStyle>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Photosnap Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
      <button class="invite-btn-nav">Get an Invite</button>
      <div className="hamburger" onClick={hamburger}>
        <div className="line-one"></div>
        <div className="line-two"></div>
      </div>
    </NavStyle>
  );
};

export default Nav;
