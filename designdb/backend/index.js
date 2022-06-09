const express = require("express");
const app = express();
const connect = require("./src/configs/db");

app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("Hi");
// });
const userController = require("./src/controllers/user.controller");
app.use("/user", userController);

const brandController = require("./src/controllers/brand.controller");
app.use("/brand", brandController);

const productController = require("./src/controllers/product.controller");
app.use("/product", productController);

app.listen(8080, async () => {
  try {
    await connect();
    console.log("listening on port 8080");
  } catch (err) {
    console.log(err.message);
  }
});
