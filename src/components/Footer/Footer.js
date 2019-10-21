import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section footer">
      {/* footer links */}
      <div className="footer-links">
        <a href="#home" className="footer-link scroll-link">
          home
        </a>
        <a href="#about" className="footer-link scroll-link">
          about
        </a>
        <a href="#services" className="footer-link scroll-link">
          services
        </a>
        <a href="#projects" className="footer-link scroll-link">
          projects
        </a>
        <a href="#contact" className="footer-link scroll-link">
          contact
        </a>
      </div>

      {/* footer icons */}
      <div className="footer-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="footer-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          className="footer-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* footer copyright */}
      <p className="copyright">
        copyright &copy; Daran Oy {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
