module.exports = (data) => {
  return (
    "<h1>New form submitted</h1>" +
    "<br>" +
    "<p>From: " +
    data.email +
    "</p>" +
    "<p>Message: " +
    data.message +
    "</p>"
  );
};
