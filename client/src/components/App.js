import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// call connect function to give certain components the ability to call action creators
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./general/Header";
import Footer from "./general/Footer";
import Homepage from "./homepage";
import TermsAndConditions from "./terms";
import ContactUs from "./contact";

const Order = () => (
  <div className="comming-soon-page">
    <div className="container">
      <h2 className="page-title">Order</h2>
      <p className="comming-soon">Comming soon</p>
    </div>
  </div>
);

class App extends Component {
  componentDidMount() {
    // accessed from the connect function
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/order" component={ Order } />
        <Route path="/contact-us" component={ ContactUs } />
        <Route path="/terms-and-conditions" component={ TermsAndConditions } />
        <Footer />
      </BrowserRouter>
    );
  }
}

// connect function connects the app to redux store
export default connect(null, actions)(App);
