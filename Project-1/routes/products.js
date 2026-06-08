const express = require("express");
const router = express.Router();

let products = [];
let id = 1;

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET single product
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

// CREATE product
router.post("/", (req, res) => {
  const newProduct = {
    id: id++,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// UPDATE product
router.put("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });

  product.name = req.body.name;
  product.price = req.body.price;

  res.json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;