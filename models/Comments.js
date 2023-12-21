// models/comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Post = require("./Posts");

const Comment = sequelize.define(
  "Comment",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Comment.belongsTo(Post, { foreignKey: "postId" });

Comment.sync();

module.exports = Comment;
