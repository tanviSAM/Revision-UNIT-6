const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandNm: { type: String, required: true },
    registrationNo: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Brand = mongoose.model("brand", brandSchema);
module.exports = Brand;
