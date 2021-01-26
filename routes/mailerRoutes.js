const Mailer = require("../services/Mailer");
const contactUsAdminTemplate = require("../services/emailTemplates/contactUsAdminTemplate");
const contactUsUserTemplate = require("../services/emailTemplates/contactUsUserTemplate");

module.exports = (app) => {
  app.post("/api/mail/contact", (req, res) => {
    const data = req.body;

    // send mail to the admin
    const mailerAdmin = new Mailer(
      { subject: data.subject, email: "walid@imaginelabs.me" },
      contactUsAdminTemplate(data)
    );
    mailerAdmin.send();

    // send mail to the user
    const mailerUser = new Mailer(
      { subject: "EPS Contact Us Form Received", email: data.email },
      contactUsUserTemplate(data)
    );
    mailerUser.send();
  });
};
