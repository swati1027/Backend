console.log("NEW SERVER RUNNING");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.json({
    message: "Server Running",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});