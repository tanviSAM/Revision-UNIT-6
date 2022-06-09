const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstnm: { type: String, required: true },
    lastnm: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
