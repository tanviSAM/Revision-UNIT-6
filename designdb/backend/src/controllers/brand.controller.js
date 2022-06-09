const express = require("express");
const Brand = require("../models/brand.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().lean().exec();
    return res.status(200).send(brands);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    return res.status(201).send(brand);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
