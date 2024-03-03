import React from "react";
import "./Header.css";
import Resume from "../../assets/Harsh-Kansara-Resume.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import profile_img from "../../assets/profile.png";

const Header = () => {
  return (
    <header id="header">
      <div className="header__contaier">
        <div className="header__left">
          <div className="header_text">
            <h5>Hello, Nice to see you here! 🙋‍♂️</h5>
            <h1>I'm Harsh Kansara.</h1>
            <h3>Software Developer 👨‍💻</h3>
          </div>
          <div className="header__icons">
            <a href="https://www.linkedin.com/in/harsh-kansara-a10112142/" target="_blank">
              <FaLinkedin className="icon"></FaLinkedin>
            </a>

            <a href="https://github.com/Harshkansara26" target="_blank">
              <FaGithubSquare className="icon"> </FaGithubSquare>
            </a>
          </div>

          <div className="header__download">
            <a className="btn" target="_blank" href={Resume}>
              Resume
            </a>
            <a className="btn" href="#about">
              About Me
            </a>
            <a
              className="btn"
              target="_blank"
              href="https://wimtach.centennialcollege.ca/student-harsh-kansara/"
            >
              Featured
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="right__image">
            <img src={profile_img}></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
