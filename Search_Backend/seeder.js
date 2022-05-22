const db = require("./util/database");

const students = require("./data/students.js");
const Students = require("./models/studentModel");

db.sync(); // connecting to database

const importData = async () => {
  try {
    await Students.deleteMany();

    await Product.insertMany(students);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
