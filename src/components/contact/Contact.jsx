import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_449px3e",
        "template_ar1e5t7",
        e.target,
        "pu3OJtzHAWE9Hm05Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact">
      <div className="sec__heading sec__container">
        <h1>
          <span className="sec__subheading">Contact </span>
          Me
        </h1>
      </div>
      <div className="contact__container ">
        <form onSubmit={sendEmail}>
          <div className="form__sec">
            <div className="form_lab">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="form_lab">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="form_lab">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="form_lab">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="6"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn" value="Send Message"></input>
            </div>
          </div>
        </form>
        <div className="header__icons">
          <p>👨‍💼 Name: Harsh Kansara</p>
          <p>
            📧 Email:
            <a href="mailto:harshkansara26@gmail.com">
              harshkansara26@gmail.com
            </a>
          </p>
          <p>🏡 Address: Toronto, Canada, ON.</p>
          <p>
            <a href="https://www.linkedin.com/in/harsh-kansara-a10112142/">
              <FaLinkedin className="icon"></FaLinkedin>
            </a>
            <a href="https://github.com/Harshkansara26">
              <FaGithubSquare className="icon"> </FaGithubSquare>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
