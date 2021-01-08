import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// call connect function to give certain components the ability to call action creators
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./general/Header";
import Footer from "./general/Footer";
import Homepage from "./homepage";

const Products = () => (
  <div className="comming-soon-page">
    <div className="container">
      <h2 className="page-title">Products</h2>
      <p className="comming-soon">Comming soon</p>
    </div>
  </div>
);
const ContactUs = () => (
  <div className="comming-soon-page">
    <div className="container">
      <h2 className="page-title">Contact Us</h2>
      <p className="comming-soon">Comming soon</p>
    </div>
  </div>
);
const TermsAndConditions = () => (
  <div className="comming-soon-page">
    <div className="container">
      <h2 className="page-title">Terms And Conditions</h2>
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
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={ Homepage } />
            <Route exact path="/products" component={ Products } />
            <Route path="/contact-us" component={ ContactUs } />
            <Route
              path="/terms-and-conditions"
              component={ TermsAndConditions }
            />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// connect function connects the app to redux store
export default connect(null, actions)(App);
