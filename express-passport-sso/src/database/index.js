// const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: "localhost",
//     dialect: "mysql",
//   }
// );

// sequelize.sync();

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

async function DBCONNECT() {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/ssologin');
    console.log(" mongodb connected")
  } catch (error) {
    console.log(error)
  }
}

module.exports = DBCONNECT;
