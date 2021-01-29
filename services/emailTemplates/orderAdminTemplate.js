module.exports = (data) => {
  return (
    "<h1>Hello,</h1>" +
    "<p>User " +
    data.firstName +
    " " +
    data.lastName +
    " ordered " +
    data.panelsQuantity +
    " panels and " +
    data.powerWallsQuantity +
    " power walls for $" +
    data.totalCost +
    "</p>" +
    "<br>" +
    "<p>Address: " +
    data.address +
    "</p>" +
    "<p>Email: " +
    data.email +
    "</p>"
  );
};
