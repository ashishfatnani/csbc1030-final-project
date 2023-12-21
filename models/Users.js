const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); // Make sure to replace this with your Sequelize instance
const Post = require("./Posts");
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
    },
    company: {
      type: DataTypes.JSONB,
    },
  },
  {
    timestamps: true,
  }
);
User.hasMany(Post, { foreignKey: "userId" });

User.sync();

module.exports = User;
