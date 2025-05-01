const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Selamat datang di Backend Project API!");
});

const productController = require("./product/product.controller");
app.use("/products", productController);

app.listen(PORT, () => {
  console.log(`Express API running on port: ${PORT}`);
});
