import React from "react";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Service from "../components/Services/Services";
import Projects from "../components/Projects/Projects";

const HomePage = () => {
  return (
    <header>
      <Hero />
      <About />
      <Service />
      <Projects />
    </header>
  );
};

export default HomePage;
