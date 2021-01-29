const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const OrderMailer = require("../services/OrderMailer");
const orderAdminTemplate = require("../services/emailTemplates/orderAdminTemplate");
const orderUserTemplate = require("../services/emailTemplates/orderUserTemplate");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 10000,
      currency: "usd",
      description: "$100 for 100 credits",
      source: req.body.id,
    });

    req.user.credits += 100;
    const user = await req.user.save();

    res.send(user);
  });

  app.post("/api/order", requireLogin, requireCredits, async (req, res) => {
    const data = await req.body;

    req.user.credits -= data.totalCost;
    const user = await req.user.save();

    const mailerAdmin = new OrderMailer(
      { email: "walid@imaginelabs.me" },
      orderAdminTemplate(data)
    );
    mailerAdmin.send();

    const mailerUSer = new OrderMailer(
      { email: email },
      orderUserTemplate(data)
    );
    mailerUSer.send();

    res.send(user);
  });
};
