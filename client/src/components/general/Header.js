import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

import Payments from "../Payments";

class Header extends Component {
  renderContent() {
    // this.props.auth is accessed from the connect function
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" className="color__deep__orange">Login</a>
          </li>
        );
      default:
        return (
          <>
            <li style={{ margin: "0 10px" }}>
              <Payments />
            </li>
            <li>
              <span className="color__deep__orange">
                credits: { this.props.auth.credits }
              </span>
            </li>
            <li>
              <a href="/api/logout" className="color__deep__orange">Logout</a>
            </li>
          </>
        );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo nav-logo">
            EPS
          </Link>
          <ul className="right">{ this.renderContent() }</ul>
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
