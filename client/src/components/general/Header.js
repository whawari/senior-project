import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

import Payments from "../payments";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarActive: false,
    };
  }

  handleNavbarActive = () => {
    this.setState({
      navbarActive: !this.state.navbarActive,
    });

    let htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("stop-scroll");
  };

  renderContent() {
    // this.props.auth is accessed from the connect function
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" className="color__deep__orange">
              Login
            </a>
          </li>
        );
      default:
        return (
          <>
            <li style={{ margin: "0 10px" }}>
              <Payments />
            </li>
            <li>
              <span
                className="color__light__blue font__bold"
                style={{ fontSize: "18px" }}
              >
                credits: {this.props.auth.credits}
              </span>
            </li>
            <li>
              <a
                href="/api/logout"
                className="color__deep__orange font__bold"
                style={{ fontSize: "18px" }}
              >
                Logout
              </a>
            </li>
          </>
        );
    }
  }

  render() {
    // console.log(this.props.auth)
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo nav-logo">
            <img src="./assets/logo.png" alt="logo" />
          </Link>
          <ul
            className={`right ${
              this.state.navbarActive ? "activate-navbar" : ""
            }`}
          >
            {this.renderContent()}
          </ul>
          <div id="navBurger" onClick={this.handleNavbarActive}>
            <div
              className="nav-burger-piece nav-burger-piece-one"
              style={{
                transform: this.state.navbarActive ? "rotate(45deg)" : "",
              }}
            ></div>
            <div
              className="nav-burger-piece nav-burger-piece-two"
              style={{
                transform: this.state.navbarActive ? "translateX(100px)" : "",
              }}
            ></div>
            <div
              className="nav-burger-piece nav-burger-piece-three"
              style={{
                transform: this.state.navbarActive ? "rotate(-45deg)" : "",
              }}
            ></div>
          </div>
        </div>
      </nav>
    );
  }
}

// gets called with the entire state object out of the redux store
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
