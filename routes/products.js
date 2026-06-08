const express = require("express");

const router = express.Router();

let products = [];

// Add product
router.post("/", (req, res) => {
  products.push(req.body);

  res.json({
    message: "Product Added",
    products,
  });
});

// Get products
router.get("/", (req, res) => {
  res.json(product);
});

module.exports = router;
