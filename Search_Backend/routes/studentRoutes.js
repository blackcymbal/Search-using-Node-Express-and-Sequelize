const express = require("express");
const router = express.Router();
const Students = require("../models/studentModel.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get all students
// To search with keywork
// http://localhost:5000/students?keyword=john
router.get("/", (req, res) => {
  let term = req.query.keyword;
  Students.findAll({ where: { name: { [Op.like]: "%" + term + "%" } } }).then(
    (students) => res.json(students)
  );
});

// // Get
// router.get("/", (req, res) => {
//   Students.findAll().then((students) => res.json(students));
// });

// Post a student
router.post("/add", (req, res) => {
  let { name, email, phone } = req.body;

  Students.create({
    name,
    email,
    phone,
  })
    .then((gig) => res.redirect("/students"))
    .catch((err) => console.log(err));
});

module.exports = router;
