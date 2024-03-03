import React from "react";
import "./Experience.css";

const Experience = () => {
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
          <h2 className="experience__title">👨‍💻 IT Analyst</h2>
          <h4 className="experience__subtitle">🏢 DependableIT, Hamilton, Canada.</h4>
          <h4 className="experience__subtitle">April 2023 –Current</h4>
          <p className="experience__description">
            👉 Understand business needs and provide solutions to improve operations. Attend staff development workshops and
refresher courses as required. Update systems to record the measures taken to troubleshoot the problem.
          </p>
          <p className="experience__description">
            👉 Document the reasoning, changes in the development of processes and followed the latest tech. developments.
          </p>
          <p className="experience__description">
            👉 Multi-task using the software to verify customer data in order to determine appropriate issue resolution.
          </p>
          <p className="experience__description">
            👉 Deliver responses which consistently exceed client expectations in terms of responsiveness and accuracy.
          </p>
        </div>
        
        <div className="experience__section">
          <h2 className="experience__title">👨‍💻 Software Engineer Intern</h2>
          <h4 className="experience__subtitle">🏢 WIMTACH, Toronto, Canada.</h4>
          <h4 className="experience__subtitle">Jan 2022 –Dec 2022</h4>
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

export default Experience;
