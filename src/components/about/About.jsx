import React from "react";
import "./About.css";
import profile_img from "../../assets/profile.jpeg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import Resume from "../../assets/Harsh-Kansara-Resume.pdf";

const About = () => {
  return (
    <div id="about" className="about__container sec__container">
      <div className="sec__heading">
        <h1>
          <span className="sec__subheading">About </span>
          Me
        </h1>
      </div>

      <div className="grid__structure">
        <div className="about__image__left">
          <img className="left__image" src={profile_img}></img>
        </div>
        <div className="about__info__right">
          <div className="about__text">
            <p>
              An ambitious Software Developer with 1+ years of industrial
              experience in development. Proficient in{" "}
              <strong>
                Software development, JavaScript, React.js, React-Native.js, Node.js, Angular.js,
                Python and databases.
              </strong>
            </p>
            <p>
              Moreover, with an exceptional academic record, graduated from
              Centennial College with an
              <strong> Adv. Diploma in Software Engineering Technology-Artificial
                Intelligence.
              </strong>
              Also, earned a 
              <strong> Bachelor of Engineering in Information Technology</strong>.
            </p>
            <p className="resume">
              <a className="btn" target="_blank" href={Resume} rel="noreferrer">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="about__skills">
        <div className="skill">
          <IoLogoJavascript className="skill__icon" />
          <h1>JavaScript</h1>
        </div>
        <div className="skill">
          <FaReact className="skill__icon" />
          <h1>React</h1>
        </div>
        <div className="skill">
          <FaNodeJs className="skill__icon"></FaNodeJs>
          <h1>Node.js</h1>
        </div>
        <div className="skill">
          <SiMongodb className="skill__icon" />
          <h1>MongoDB</h1>
        </div>
        <div className="skill">
          <FaSass className="skill__icon" />
          <h1>Sass</h1>
        </div>
        <div className="skill">
          <FaPython className="skill__icon" />
          <h1>Python</h1>
        </div>
        <div className="skill">
          <SiFlask className="skill__icon" />
          <h1>Py-Flask</h1>
        </div>
        <div className="skill">
          <SiOpencv className="skill__icon" />
          <h1>Opencv</h1>
        </div>
        <div className="skill">
          <SiPandas className="skill__icon" />
          <h1>Pandas</h1>
        </div>
        <div className="skill">
          <SiNumpy className="skill__icon" />
          <h1>NumPy</h1>
        </div>
        <div className="skill">
          <SiScikitlearn className="skill__icon" />
          <h1>SK-Learn</h1>
        </div>
        <div className="skill">
          <SiScikitlearn className="skill__icon" />
          <h1>React-Native</h1>
        </div>
        <div className="skill">
          <SiAmazonaws className="skill__icon" />
          <h1>AWS</h1>
        </div>
        <div className="skill">
          <SiMysql className="skill__icon" />
          <h1>MySQL</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
