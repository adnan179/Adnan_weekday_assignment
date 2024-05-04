import React, { useState } from "react";

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="card-container__about">
      <h1>About Company:</h1>
      <h2>About us</h2>
      <p className={`fade-text ${showFullText ? "show-full" : ""}`}>
        This is a sample job and you must have displayed it to understand that
        its not just some random lorem ipsum text but something which was
        manually written. Oh well, if random text is what you were looking for
        then here it is: Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages and now...
      </p>
      {!showFullText && (
        <div className="view-more" onClick={toggleFullText}>
          View Job
        </div>
      )}
    </div>
  );
};

export default About;
