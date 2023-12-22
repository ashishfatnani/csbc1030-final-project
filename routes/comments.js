const express = require("express");
const router = express.Router({ mergeParams: true });
const authenticateMiddleware = require("../middleware/auth");
const {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");

router
  .route("/:postId/comments")
  .get(authenticateMiddleware, getAllComments)
  .post(authenticateMiddleware, createComment);

router
  .route("/:postId/comments/:commentId")
  .put(authenticateMiddleware, updateComment)
  .delete(authenticateMiddleware, deleteComment);

module.exports = router;
