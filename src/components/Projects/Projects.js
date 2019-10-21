import React from "react";

import "./Projects.css";

import ProjectItem from "./ProjectItem/ProjectItem";
import { AppConsumer } from "../../context";
import TitleSection from "../TitleSection/TitleSection";

const Projects = () => {
  return (
    <AppConsumer>
      {value => {
        const { storeProjects } = value;
        return (
          <section className="projects section" id="projects">
            {/* title */}
            <TitleSection title="our" subtitle="projects" />
            <div className="section-center projects-center">
              {storeProjects.map(project => {
                return <ProjectItem project={project} key={project.id} />;
              })}
            </div>
          </section>
        );
      }}
    </AppConsumer>
  );
};

export default Projects;
