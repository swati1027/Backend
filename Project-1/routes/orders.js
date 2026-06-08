const express = require("express");
const router = express.Router();

let orders = [];
let id = 1;

// GET all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// GET single order
router.get("/:id", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (!order) return res.status(404).json({ message: "Not found" });
  res.json(order);
});

// CREATE order
router.post("/", (req, res) => {
  const newOrder = {
    id: id++,
    product: req.body.product,
    quantity: req.body.quantity
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// UPDATE order
router.put("/:id", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (!order) return res.status(404).json({ message: "Not found" });

  order.product = req.body.product;
  order.quantity = req.body.quantity;

  res.json(order);
});

// DELETE order
router.delete("/:id", (req, res) => {
  orders = orders.filter(o => o.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;