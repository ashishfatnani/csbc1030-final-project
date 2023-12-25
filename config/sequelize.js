const { Sequelize } = require("sequelize");

//code to estabish mysql connection
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "ashish123",
  database: "csbc1030finalproject",
});

module.exports = sequelize;
