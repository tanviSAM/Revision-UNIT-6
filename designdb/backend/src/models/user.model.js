const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
