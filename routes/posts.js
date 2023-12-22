const express = require("express");
const authenticateMiddleware = require("../middleware/auth");

const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
} = require("../controllers/posts");

const router = express.Router({ mergeParams: true });
router
  .route("/")
  .get(authenticateMiddleware, getAllPosts)
  .post(authenticateMiddleware, createPost);

router.route("/:id").get(getSinglePost).put(updatePost);

module.exports = router;
