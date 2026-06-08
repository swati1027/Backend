const express = require("express");

const router = express.Router();

let orders = [];

// Create order
router.post("/", (req, res) => {

  orders.push(req.body);

  res.json({
    message: "Order Created",
    orders,
  });
});

// Get orders
router.get("/", (req, res) => {

  res.json(orders);

});

module.exports = router;