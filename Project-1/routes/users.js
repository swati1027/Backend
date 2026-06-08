const express = require("express");
const router = express.Router();

let users = [];
let id = 1;

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET single user
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
});

// CREATE user
router.post("/", (req, res) => {
  const newUser = {
    id: id++,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "Not found" });

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

// DELETE user
router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;