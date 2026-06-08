const express = require("express");

const router = express.Router();

let users = [];

// Register user
router.post("/register", (req, res) => {

  users.push(req.body);

  res.json({
    message: "User Registered",
    users,
  });
});

// Get users
router.get("/", (req, res) => {

  res.json(users);

});

module.exports = router;