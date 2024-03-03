import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class Navbar extends Component {
  state = { clicked: false, val: " H R Kansara " };
  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar-items">
        <a href="#header" className="nav-links nav-logo">
          <span className="navbar-logo">{this.state.val}</span>
        </a>

        <div className="menu-icon" onClick={this.clickHandler}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#header" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-links">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-links">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
