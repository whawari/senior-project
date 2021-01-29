import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// call connect function to give certain components the ability to call action creators
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./general/Header";
import Footer from "./general/Footer";
import Homepage from "./homepage";
import TermsAndConditions from "./terms";
import ContactUs from "./contact";
import Order from "./order";
import Error404 from "./general/Error404";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/order" component={ Order } />
        <Route exact path="/contact-us" component={ ContactUs } />
        <Route exact path="/terms-and-conditions" component={ TermsAndConditions } />
        <Route path="*" component={ Error404 } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

// connect function connects the app to redux store
export default connect(null, actions)(App);
