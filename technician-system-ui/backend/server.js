
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/devices", (req, res) => {
  res.json([
    { model: "iPhone 11", issue: "Broken Screen", status: "Pending" },
    { model: "Samsung A50", issue: "Battery Issue", status: "In Progress" }
  ]);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
