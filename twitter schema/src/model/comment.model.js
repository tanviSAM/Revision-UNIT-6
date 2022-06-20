const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: String, required: true },
    comment: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const comment = mongoose.model("comment", commentSchema);
module.exports = comment;
