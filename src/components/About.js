import React, { useState } from "react";

const About = ({ jobDetailsFromCompany }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="card-container__about">
      <h1>About Company:</h1>
      <h2>About us</h2>
      <p className={`fade-text ${showFullText ? "show-full" : ""}`}>
        {jobDetailsFromCompany}
      </p>
      {!showFullText ? (
        <div className="view-more" onClick={toggleFullText}>
          View Job
        </div>
      ) : (
        <div className="view-less" onClick={toggleFullText}>
          View Less
        </div>
      )}
    </div>
  );
};

export default About;
