import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// call connect function to give certain components the ability to call action creators
import { connect } from "react-redux";
import  * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";


const Dashboard = () => <h2>Dashboard</h2>;
const Survey = () => <h2>Survey</h2>;

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
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/survey" component={Survey} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// connect function connects the app to redux store
export default connect(null, actions)(App);
