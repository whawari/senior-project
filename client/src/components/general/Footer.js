import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="appFooter">
      <div className="container">
        <div className="app-footer-upper">
          <img src="./assets/logo.jpg" alt="logo" />
          <div className="follow-us-wrapper">
            <h4 className="font__bold margin__zero color__light__blue">Follow us</h4>
            <a href="https://www.instagram.com/whawari/">
              <img src="./assets/instagram.png" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/whawari">
              <img src="./assets/facebook.png" alt="facebook" />
            </a>
            <a href="https://github.com/whawari">
              <img src="./assets/github.png" alt="github" />
            </a>
          </div>
        </div>
        <div className="app-footer-lower">
          <div className="done-by">
            <h4 className="font__bold margin__zero color__light__blue">
              Walid Hawari
            </h4>
            <h4 className="font__bold margin__zero color__light__blue">
              Ibrahim Jardani
            </h4>
          </div>
          <div className="footer-site-links">
            <Link to="/contact-us">
              contact us
            </Link>
            <Link to="/terms-and-conditions">
              terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
