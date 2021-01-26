import React, { useState } from "react";
import validator from "validator";
import axios from "axios";

import "./index.css";

const ContactUs = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    subject === "" ? setSubjectError("Required field") : setSubjectError("");
    message === "" ? setMessageError("Required field") : setMessageError("");
    const isEmailValid = validator.isEmail(email);
    email === ""
      ? setEmailError("Required field")
      : isEmailValid
      ? setEmailError("")
      : setEmailError("Invalid email");

    if (subject !== "" && email !== "" && isEmailValid && message !== "") {
      const contactInstance = axios.create();

      // contactInstance.interceptors.request.use(
      //   (config) => {
      //     // Do something before request is sent
      //     console.log("sent", config);
      //     return config;
      //   },
      //   (error) => {
      //     // Do something with request error
      //     return Promise.reject(error);
      //   }
      // );

      contactInstance
        .post("/api/mail/contact", {
          subject: subject,
          email: email,
          message: message,
        })
        .then((response) => {
          console.log("response:", response);
        })
        .catch((error) => {
          setSubmitError(true);
          console.log("error:", error);
        });

      contactInstance.interceptors.response.use(
        (response) => {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          setSubject("");
          setEmail("");
          setMessage("");
          setSubmitSuccess(true);
          return response;
        },
        (error) => {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          console.log("response");
          return Promise.reject(error);
        }
      );
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case "subject":
        setSubject(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <section id="contact-us">
      <div className="container">
        <h1>Contact Us</h1>

        <form>
          <div className="contact-input-field-wrapper">
            <label
              htmlFor="contact-subject"
              style={{
                color: subjectError ? "var(--danger)" : "var(--light-blue)",
              }}
            >
              Subject*
            </label>
            <input
              type="text"
              id="contact-subject"
              required
              name="subject"
              onChange={handleInputChange}
            />
            <p>{subjectError}</p>
          </div>

          <div className="contact-input-field-wrapper">
            <label
              htmlFor="contact-email"
              style={{
                color: emailError ? "var(--danger)" : "var(--light-blue)",
              }}
            >
              Email*
            </label>
            <input
              type="email"
              id="contact-email"
              required
              name="email"
              onChange={handleInputChange}
            />
            <p>{emailError}</p>
          </div>

          <div className="contact-input-field-wrapper">
            <label
              htmlFor="contact-message"
              style={{
                color: messageError ? "var(--danger)" : "var(--light-blue)",
              }}
            >
              Message*
            </label>
            <textarea
              id="contact-message"
              rows="5"
              required
              name="message"
              onChange={handleInputChange}
            />
            <p>{messageError}</p>
            <p>
              {submitError
                ? "Something went wrong, please try again later."
                : ""}
            </p>
            <p style={{ color: "#4BB543" }}>
              {submitSuccess
                ? "Your message has been submitted successfully."
                : ""}
            </p>
          </div>
          <input
            type="submit"
            value="Send"
            id="contact-submit"
            onClick={handleContactSubmit}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
