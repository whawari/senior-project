const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

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
    console.log(req)

    res.send(user);
  });
};

module.exports = (app) => {
  app.post("/api/order", requireLogin, requireCredits, async (req, res) => {
    const data = await req.body;

    console.log(data);
    console.log("hon", res);
    // // send mail to the admin
    // const mailerAdmin = new Mailer(
    //   { subject: data.subject, email: "walid@imaginelabs.me" },
    //   contactUsAdminTemplate(data)
    // );
    // mailerAdmin.send();

    // // send mail to the user
    // const mailerUser = new Mailer(
    //   { subject: "EPS Contact Us Form Received", email: data.email },
    //   contactUsUserTemplate(data)
    // );
    // mailerUser.send();
  });
};
