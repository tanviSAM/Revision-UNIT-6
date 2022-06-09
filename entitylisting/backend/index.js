const express = require("express");
const app = express();
const getData = require("./data.json");
const port = 3000;

app.get("/", (req, res) => {
  res.send(getData);
});

app.listen(process.env.PORT || port, () => {
  console.log(`running on port ${port}`);
});