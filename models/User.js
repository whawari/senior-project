const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  profilePhoto: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
