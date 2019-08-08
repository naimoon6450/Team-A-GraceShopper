const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/grace_shopper`,
  {
    logging: false
  }
);

module.exports = db;
