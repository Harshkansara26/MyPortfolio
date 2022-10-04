import React from "react";
import "./Experience.css";

const experience = () => {
  return (
    <>
      <div id="experience" className="experience__container sec__container">
        <div className="sec__heading">
          <h1>
            My
            <span className="sec__subheading"> Experience</span>
          </h1>
        </div>
        <div className="experience__section">
          <h2 className="experience__title">👨‍💻 Software Engineer Intern</h2>
          <h4 className="experience__subtitle">🏢 WIMTACH, Toronto, Canada.</h4>
          <h4 className="experience__subtitle">Jan 2022 – Sept 2022</h4>
          <p className="experience__description">
            👉 Developing React-Native iOS based OCR application to recognize the text from
            the image and convert that text to the speech.
          </p>
          <p className="experience__description">
            👉 Designing the interactive reusable front-end components with
            React and integrating them with the backend in Flask.
          </p>
          <p className="experience__description">
            👉 Implementing REST APIs using Python and Flask, and achieved the
            accuracy of predictions to more than 90%.
          </p>
        </div>

        <div className="experience__section">
          <h2 className="experience__title">👨‍💻 UI/UX Developer</h2>
          <h4 className="experience__subtitle">
            🏢 Om Infotech, Gujarat, India.
          </h4>
          <h4 className="experience__subtitle">May 2020 to Apr 2021</h4>
          <p className="experience__description">
            👉 Gathered and evaluated user requirements in collaboration with product managers and engineers.
          </p>
          <p className="experience__description">
            👉 Illustrated design ideas using storyboards, process flows and sitemaps.
          </p>
          <p className="experience__description">
            👉 Developed UI mock-ups and prototypes to illustrate how sites function and look like.
          </p>
          <p className="experience__description">
            👉 Created original graphic designs (e.g., some images, sketches, tables, navigation buttons and search fields).
          </p>
          <p className="experience__description">
            👉 Identified and troubleshooted UX problems and also conducted layout adjustments based on user feedback.
          </p>
        </div>
      </div>
    </>
  );
};

export default experience;
