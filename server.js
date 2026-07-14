console.log("FILE LOADED");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

mongoose.connect("mongodb://127.0.0.1:27017/ngo_connect")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
