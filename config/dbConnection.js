const { Sequelize } = require("sequelize");

const db = {};
let USERNAME = "root";
let DATABASE = "mydb";
let PASSWORD = null;
let HOST = "127.0.0.1";
let DIALECT = "mysql";

const sequelize = new Sequelize({
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  dialect: DIALECT,
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../src/models/users-model')(sequelize, Sequelize)

db.sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
}).catch((error) => {
  console.error("Unable to connect to the database:", error)
})

module.exports = db;