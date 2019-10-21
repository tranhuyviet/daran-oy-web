import React from "react";

import video from "../../images/video.mp4";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-video-wrap">
        <video autoPlay loop className="hero-video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-video-overlay"></div>
      <div className="hero-banner">
        <h1 className="hero-title">continue exploring</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia
          quisquam illum?
        </p>
        <a href="#projects" className="btn-white scroll-link">
          our projects
        </a>
      </div>
    </div>
  );
};

export default Hero;
