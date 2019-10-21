import React from "react";

import "./ProjectItem.css";
import { FaMap } from "react-icons/fa";

const ProjectItem = ({ project }) => {
  //console.log(project);
  const { image, title, location, date } = project;
  return (
    <article className="project-card">
      {/* image */}
      <div className="project-img-container">
        <img src={image} alt="project" className="project-img" />
        <p className="project-date">{date}</p>
      </div>

      {/* project footer */}
      <div className="project-footer">
        <h4 className="project-title">{title}</h4>
        <p className="project-location">
          <FaMap className="location-icon" /> {location}
        </p>
      </div>
    </article>
  );
};

export default ProjectItem;
