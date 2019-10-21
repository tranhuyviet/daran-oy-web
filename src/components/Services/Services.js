import React from "react";

import "./Services.css";
import TitleSection from "../TitleSection/TitleSection";

import { FaTools, FaPaintRoller, FaCity } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services section" id="services">
      {/* title */}
      <TitleSection title="our" subtitle="services" />

      {/* content */}
      <div className="services-center section-center">
        {/* service item */}
        <article className="service-item">
          <div className="service-icon-container">
            <span className="service-icon">
              <FaTools />
            </span>
          </div>
          <div className="service-info-container">
            <h4 className="service-title">saving monney</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              deserunt?
            </p>
          </div>
        </article>
        {/* end of service item */}

        {/* service item */}
        <article className="service-item">
          <div className="service-icon-container">
            <span className="service-icon">
              <FaPaintRoller />
            </span>
          </div>
          <div className="service-info-container">
            <h4 className="service-title">saving monney</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              deserunt?
            </p>
          </div>
        </article>
        {/* end of service item */}

        {/* service item */}
        <article className="service-item">
          <div className="service-icon-container">
            <span className="service-icon">
              <FaCity />
            </span>
          </div>
          <div className="service-info-container">
            <h4 className="service-title">saving monney</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              deserunt?
            </p>
          </div>
        </article>
        {/* end of service item */}
      </div>
    </section>
  );
};

export default Services;
