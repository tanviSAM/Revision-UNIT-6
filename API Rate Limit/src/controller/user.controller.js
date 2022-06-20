const express = require("express");
const User = require("../model/user.model");
const router = express.Router();
const ratelimit = require("express-rate-limit");

const limit = ratelimit({ max: 10, windoeMs: 500 });

router.get("/", limit, async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id/addresses", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const addresses = user.addresses;

    return res.status(201).send(addresses);
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], error: error.message });
  }
});

module.exports = router;
