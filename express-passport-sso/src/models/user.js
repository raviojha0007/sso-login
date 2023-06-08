// const { DataTypes } = require("sequelize");
// const sequelize = require("../database");

// const User = sequelize.define("User", {
//   fullName: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   googleId: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   picture: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// module.exports = User;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  googleId: String,
  picture: String,
});

const USER = mongoose.model('user', userSchema);

module.User = USER;
