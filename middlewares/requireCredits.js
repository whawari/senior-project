module.exports = (req, res, next) => {
  // update this according to the minimum required credits
  // needed to order a solar panel
  if (req.user.credits < 1) {
    return res.status(403).send({
      error: "Insufficient credits!",
    });
  }

  next();
};
