const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const comments = require("./routes/comments.js");
const auth = require("./routes/auth.js");
const sequelize = require("./config/sequelize.js");

const port = 5000; // Port running

//Body parser logic
app.use(express.json());

// Mount routers
app.use("/", auth);
app.use("/users", users);
app.use("/posts", posts, comments);

//code to connect with sequelize
const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error syncing with the database:", error);
  }
};

startServer();
module.exports = app;
