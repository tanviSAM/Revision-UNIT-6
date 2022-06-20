const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    user_name: { type: String, required: true },
    dob: { type: Number, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userschema);
module.exports = User;
