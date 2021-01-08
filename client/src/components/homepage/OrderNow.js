import { Link } from "react-router-dom";
import React from "react";

const OrderNow = ({ buttonColor }) => {
  return (
    <Link
      to="/products"
      id="orderNowButton"
      className={`${buttonColor === "white" ? "white-button" : "black-button"}`}
    >
      order now
    </Link>
  );
};

export default OrderNow;
