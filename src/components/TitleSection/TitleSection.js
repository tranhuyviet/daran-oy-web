import React from "react";

const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="title-wrapper">
      <h2 className="title">
        {title} <span className="subtitle">{subtitle}</span>
      </h2>
    </div>
  );
};

export default TitleSection;
