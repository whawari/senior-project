import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import validator from "validator";
import { useLocation } from "react-router-dom";

import "./index.css";

const Order = ({ auth }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const [credits, setCredits] = useState("");
  const [solarPanelsQuantity, setSolarPanelsQuantity] = useState(2);
  const [powerWallsQuantity, setPowerWallsQuantity] = useState(1);
  const solarPanelCost = 20;
  const powerWallCost = 30;
  const [totalCost, setTotalCost] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [insufficientCredits, setInsufficientCredits] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    totalCost > credits
      ? setInsufficientCredits("Insufficient credits!")
      : setInsufficientCredits("");
    firstName === "" ? setFirstNameError("Required") : setFirstNameError("");
    lastName === "" ? setLastNameError("Required") : setLastNameError("");
    address === "" ? setAddressError("Required") : setAddressError("");
    email === ""
      ? setEmailError("required")
      : validator.isEmail(email)
      ? setEmailError("")
      : setEmailError("Email not valid");

    if (
      totalCost <= credits &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      validator.isEmail(email) &&
      address !== ""
    ) {
      axios
        .post("/api/order", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          address: address,
          panelsQuantity: solarPanelsQuantity,
          panelCost: solarPanelCost,
          powerWallsQuantity: powerWallsQuantity,
          powerWallCost: powerWallCost,
          totalCost: totalCost,
        })
        .then((response) => {
          console.log("response:", response);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  };

  useEffect(() => {
    setTotalCost(calculateCost);
    // eslint-disable-next-line
  }, [solarPanelsQuantity, powerWallsQuantity]);

  useEffect(() => {
    if (auth) setCredits(auth.credits);
  }, [auth]);

  const calculateCost = () => {
    const total =
      solarPanelsQuantity * solarPanelCost + powerWallsQuantity * powerWallCost;
    return total;
  };

  const handleInputsValues = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "solarPanelsQuantity":
        setSolarPanelsQuantity(value);
        break;
      case "powerWallsQuantity":
        setPowerWallsQuantity(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      default:
        break;
    }
  };

  return (
    <section id="order">
      <div className="container">
        <div
          className="order-hero-image"
          style={{ backgroundImage: "url(./assets/hero.jpg)" }}
        ></div>
        <form id="order-form">
          <div className="order-images-container">
            <div className="order-products-images">
              <img src="./assets/solar-panel.png" alt="solar panel" />
            </div>
            <div className="order-quantity-wrapper">
              <h3>cost for 1 is $20</h3>
              <input
                type="number"
                min="2"
                placeholder="Solar panels"
                defaultValue="2"
                max="6"
                name="solarPanelsQuantity"
                onChange={handleInputsValues}
              />
            </div>
          </div>
          <div className="order-images-container">
            <div className="order-products-images">
              <img src="./assets/power-wall.png" alt="power wall" />
            </div>
            <div className="order-quantity-wrapper">
              <h3>cost for 1 is $30</h3>
              <input
                type="number"
                min="1"
                placeholder="Power wall"
                defaultValue="1"
                max="4"
                name="powerWallsQuantity"
                onChange={handleInputsValues}
              />
            </div>
          </div>
          <div className="order-field-inputs-group">
            <input
              type="text"
              placeholder="First name*"
              name="firstName"
              onChange={handleInputsValues}
            />
            <span>{firstNameError}</span>
            <input
              type="text"
              placeholder="Last name*"
              name="lastName"
              onChange={handleInputsValues}
            />
            <span>{lastNameError}</span>
            <input
              type="email"
              placeholder="Email*"
              name="email"
              onChange={handleInputsValues}
            />
            <span>{emailError}</span>
            <input
              type="text"
              placeholder="Address*"
              name="address"
              onChange={handleInputsValues}
            />
            <span>{addressError}</span>
          </div>
          <p>
            By placing this order, I agree to the Energy Order Purchase
            Agreement, Terms of Use, and Privacy Notice. I also authorize
            Electric Power Service to begin submitting permits and prepare for
            my upcoming install.
          </p>
          <h3>Cost: ${totalCost}</h3>
          <input
            type="submit"
            value="PLACE ORDER"
            onClick={handleSubmit}
            id="order-submit"
          />
        </form>
        <p>{insufficientCredits}</p>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Order);
