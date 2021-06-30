import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5rem 10rem;
  min-height: 40vh;
  background: #000000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 5rem;
  }

  .footer-logo-social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: baseline;
    @media screen and (max-width: 768px) {
      align-self: center;
    }

    .social-icons {
      padding-top: 10rem;
      display: flex;
      justify-content: center;
      gap: 15px;
      align-items: center;
      flex-direction: row;

      @media screen and (max-width: 768px) {
        padding-top: 3rem;
      }
    }
  }

  .footer-nav-site {
    align-self: baseline;
    margin-left: -500px;

    @media screen and (max-width: 768px) {
      margin-left: 0rem;
      margin-top: 5rem;
      align-self: center;
      text-align: center;
    }

    .footer-links {
      list-style: none;

      li {
        margin-top: 2rem;
      }

      li > a {
        color: #ffffff;
        font-size: 1.5rem;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: lighter;
        letter-spacing: 0.2rem;
        transition: all 0.5s ease;
        &:hover {
          color: #494949;
        }
      }
    }
  }

  .footer-invite {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: baseline;

    @media screen and (max-width: 768px) {
      margin-top: 5rem;
      align-self: center;
    }

    .invite-link {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      align-self: flex-start;
      padding-top: 3rem;
      gap: 15px;

      @media screen and (max-width: 768px) {
        align-self: center;
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

    .copyright-content {
      padding-top: 10rem;
      @media screen and (max-width: 768px) {
        padding-top: 3rem;
      }
      p {
        font-size: 1.5rem;
        color: #dfdfdf;
      }
    }
  }
`;

export default FooterStyle;
