const Sequelize = require("sequelize");

const db = new Sequelize("abc", "root", "12345678", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
