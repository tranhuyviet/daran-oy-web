import React from "react";

import "./About.css";

import TitleSection from "../TitleSection/TitleSection";

import aboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <section className="section about" id="about">
      {/* about title */}
      <TitleSection title="about" subtitle="us" />

      {/* about content */}
      <div className="about-center section-center">
        {/* about-image */}
        <article className="about-img">
          <img src={aboutImg} alt="about" className="about-photo" />
        </article>

        {/* about info */}
        <article className="about-info">
          <h2>expore the difference</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ex
            corrupti consequatur aut impedit. Labore minus expedita voluptates
            aut qui.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ex
            corrupti consequatur aut impedit. Labore minus expedita voluptates
            aut qui.
          </p>
          <a href="#" className="btn-primary">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
