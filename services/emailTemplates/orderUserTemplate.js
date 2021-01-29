module.exports = (data) => {
  return (
    "<h1>Hello " +
    data.firstName +
    " " +
    data.lastName +
    ",</h1>" +
    "<p>You ordered " +
    data.panelsQuantity +
    " panels and " +
    data.powerWallsQuantity +
    " power walls for $" +
    data.totalCost +
    "</p>" +
    "<br>" +
    "<p>The order will be delivered to this address: " +
    data.address +
    "</p>" +
    "<br>" +
    "<p>Thank you</p>"
  );
};
