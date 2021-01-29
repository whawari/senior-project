const sendGrid = require("sendgrid");

const helper = sendGrid.mail;
const keys = require("../config/keys");

class OrderMailer extends helper.Mail {
  constructor({ email }, orderTemplate) {
    super();

    this.sgApi = sendGrid(keys.sendGridKey);
    this.from_email = new helper.Email(keys.sendGridSender);
    this.subject = "EPS Order Completed";
    this.body = new helper.Content("text/html", orderTemplate);
    this.recipient = new helper.Email(email);

    this.addContent(this.body);
    this.addRecipient();
  }

  addRecipient() {
    const personalize = new helper.Personalization();
    personalize.addTo(this.recipient);
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = OrderMailer;
