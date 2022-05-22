const Sequelize = require("sequelize");
const db = require("../util/database");

const Students = db.define("students", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Students.sync().then(() => {
  console.log("table created");
});

module.exports = Students;
