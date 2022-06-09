const express = require("express");
const User = require("../model/user.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
