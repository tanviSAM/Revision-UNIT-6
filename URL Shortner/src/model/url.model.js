const mognoose = require("mongoose");
const shortID = require("shortid");

const urlSchema = new mognoose.Schema({
  url: { type: String, required: true },
  short_url: { type: String, required: true, default: shortID.generate },
});

const URL = mognoose.model("url", urlSchema);
module.exports = URL;
