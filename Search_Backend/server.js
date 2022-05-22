const express = require("express");
const mysql = require("mysql");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const products = require("./data/products");

//Importing routes
const students = require("./routes/studentRoutes");

dotenv.config();

// Database

const db = require("./util/database");

// Test

try {
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();

// For cors policy
var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use(express.json()); // To avoid bodyParser

// Student routes
app.use("/students", students);

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
