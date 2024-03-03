import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/tripez.jpg";
import img2 from "../../assets/sentiment analysis.jpg";
import img3 from "../../assets/faceid.png";
import wordpress from "../../assets/survey.jpg";
import card from "../../assets/CardScanner.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="sec__container">
      <div className="sec__heading sec__container">
        <h1>
          My
          <span className="sec__subheading"> Projects</span>
        </h1>
      </div>
      <div className="portfolio__container ">
        <div className="project">
          <h1 className="project__title">Sentiment Analysis - NLP Project</h1>
          <img src={img2} />
          <p className="project__description">
            💻 Technologies: Natural Language Processing.
          </p>
          <p className="project__description">
            ➡️ Cleaned and pre-processed Text data to analyze the sentiment of reviews on the amazon Product dataset.
          </p>

          <p className="project__description">
          ➡️ Compared results by implementing Lexicon approach (using Text Blob and VADR) and ML approach (Ensemble Learning)
          </p>

          <div className="project__btns"> 
            {/* <a
              className="btn"
              target="_blank"
              href="http://tickr-ims.herokuapp.com/home"
            >
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Harshkansara26/Sentiment-Analysis"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">
          TripEZ - Travel Planning Application
          </h1>
          <img src={img1} />
          <p className="project__description">
            💻 Technologies: Android, GraphQL, AngularJS, ExpressJS, MongoDB, NoSQL, CRUD Operations.
          </p>
          <p className="project__description">
            ➡️ Developed a web app to save user’s time with tools under the same application.
          </p>
          <p className="project__description">
            ➡️ Built Restful APIs for CRUD operation, uploading any files,
            downloading any files.
          </p>
          <div className="project__btns">
            {/* <a className="btn" target="_blank" href="#">
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Harshkansara26/TripEZ-Android"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">Face Identification</h1>
          <img src={img3} />

          <p className="project__description">
            💻 Technologies: Jupyter Notebook, K-means Clustering, Auto-encoders, GMM.
          </p>
          <p className="project__description">
            ➡️ Performed data augmentation (Autoencoder) and dimensionality reduction (PCA) on images that increased score by 25%
          </p>
          <p className="project__description">
            ➡️ Applied clustering techniques to generate actual labels and fine-tuned ANN model to classify images
          </p>
          <p></p>
          <div className="project__btns">
            {/* <a
              className="btn"
              target="_blank"
              href="https://myproject-10599.firebaseapp.com/"
            >
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Harshkansara26/Face-Recognition"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">Card Scanner</h1>
          <img src={card} />

          <p className="project__description">
            💻 Technologies: React, Python, Chalice, AWS, DynamoDb
          </p>

          <p className="project__description">
            ➡️ Created a web app that upload any card image to the AWS and fetch
            the information such as name, number, email, address and so on.
          </p>
          <p className="project__description">
            ➡️ Implemented APIs with Python and Chalice, and fetched it with
            axios in the React. Aftet that, stored card information to the
            database.
          </p>
          <p className="project__description">
            ➡️ Also, it has search all contacts and search by name features.
          </p>
          <div className="project__btns">
            {/* <a className="btn" target="_blank" href="#">
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/harsh-kansara-a10112142/Card_Scanner"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">Survey-site - Creating surveys</h1>
          <img src={wordpress} />
          <p className="project__description">
            💻 Technologies: HTML5 , CSS3 , JavaScript , AngularJS, VueJS, NodeJS, Heroku, MongoDB.
          </p>
          <p className="project__description">
            ➡️ Developed a multi-user dynamic survey website for conducting surveys using AngularJS, VueJS in Front-end, NodeJS 
            and python as a backend technology.
          </p>
          <p className="project__description">
            ➡️ Successfully built, ran, operated and deployed the website on Heroku cloud platform.
          </p>
          <div className="project__btns">
            {/* <a className="btn" href="#">
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Harshkansara26/SurveySite"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;