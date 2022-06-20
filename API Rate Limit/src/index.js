const express = require("express");
const app = express();

const connect = require("./config/db");
app.use(express.json());

const usercontroller = require("./controller/user.controller");
app.use("/user", usercontroller);

app.listen(3000, async () => {
  try {
    await connect();
    console.log("listening on port 3000");
  } catch (err) {
    console.log("Error: ", err);
  }
});
