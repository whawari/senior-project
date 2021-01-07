import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={ 500 } //cents -> 5$
        token={ token => this.props.handleStripeToken(token) }
        stripeKey={ process.env.REACT_APP_STRIPE_KEY }
        name="Electric Power Service"
        description="$5 for 5 credits"
      >
        <button className="btn nav-btn font__bold">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
