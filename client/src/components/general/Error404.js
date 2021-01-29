import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Error404 = () => {
  return (
    <section id="error-404-page">
      <h1>We lost this page</h1>
      <h3>
        Try our <Link to="/">homepage</Link> instead.
      </h3>
    </section>
  );
};

export default Error404;
