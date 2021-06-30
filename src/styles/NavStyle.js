import styled from "styled-components";

const NavStyle = styled.nav`
  min-height: 10vh;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    list-style: none;
    position: relative;

    a {
      text-decoration: none;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.2rem;
      color: #000000;
      transition: color 0.5s ease;

      &:hover {
        color: #dfdfdf;
      }
    }
  }

  .invite-btn-nav {
    border: none;
    background: #000000;
    color: #ffffff;
    cursor: pointer;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    transition: background 0.5s ease;

    &:hover {
      background: #dfdfdf;
      color: #000000;
    }
  }

  .hamburger {
    cursor: pointer;
    display: none;
    .line-one,
    .line-two {
      width: 3rem;
      height: 0.2rem;
      margin: 0.4rem;
      background: #000000;
    }
  }

  @media screen and (max-width: 768px) {
    .nav-links {
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      opacity: 0;
      z-index: 5;
      transition: transform 0.5s ease-out;
    }

    .nav-links.show {
      opacity: 1;
      animation: menuanim 0.5s ease-out forwards;
    }

    .invite-btn-nav {
      display: none;
    }

    .hamburger {
      display: block;
      z-index: 5;
    }
  }

  @keyframes menuanim {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default NavStyle;
