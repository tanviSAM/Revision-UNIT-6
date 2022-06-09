const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    prodNm: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountprice: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
