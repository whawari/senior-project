module.exports = (data) => {
  return (
    "<h1>Hello,</h1>" +
    "<br>" +
    "<p>We received your contact us form submitted on <a href='https://electric-power-service.herokuapp.com/'>EPS.</a></p>" +
    "<p>Your message was:</p>" +
    "<p>" +
    data.message +
    "</p>" +
    "<p>Thank you</p>" +
    "<p>Electric Power Service</p>"
  );
};
