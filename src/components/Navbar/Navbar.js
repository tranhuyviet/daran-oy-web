import React from "react";

import logo from "../../images/cchr-logo.png";
import { FaBars } from "react-icons/fa";

import { AppConsumer } from "../../context";

import "./Navbar.css";

const Navbar = () => {
  return (
    <AppConsumer>
      {value => {
        const { handleShowLinks, showLinks, showFixedNavbar } = value;

        console.log("fixednavbar", showFixedNavbar);
        return (
          <nav className={`navbar ${showFixedNavbar ? "fixed" : ""}`}>
            <div className="nav-center">
              {/* nav header */}
              <div className="nav-header">
                <div className="nav-logo-container">
                  <img src={logo} alt="logo cchr" className="nav-logo" />
                  <h1 className="nav-logo-text">daran</h1>
                </div>
                <FaBars className="nav-icon" onClick={handleShowLinks} />
              </div>
              {/* end of nav header */}

              {/* nav links */}
              <div
                className={`nav-links ${showLinks ? "show-links" : ""}`}
                id="nav-links"
              >
                <a href="#home" className="nav-link scroll-link">
                  home
                </a>
                <a href="#about" className="nav-link scroll-link">
                  about
                </a>
                <a href="#services" className="nav-link scroll-link">
                  services
                </a>
                <a href="#projects" className="nav-link scroll-link">
                  projects
                </a>
                <a href="#contact" className="nav-link scroll-link">
                  contact
                </a>
              </div>
              {/* end of nav links */}
            </div>
          </nav>
        );
      }}
    </AppConsumer>
  );
};

export default Navbar;
