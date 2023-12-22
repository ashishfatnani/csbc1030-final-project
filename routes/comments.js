const express = require("express");
const router = express.Router({ mergeParams: true });
const authenticateMiddleware = require("../middleware/auth");
const { getAllComments, createComment } = require("../controllers/comments");

router.route("/:id/comments").get(getAllComments).post(createComment);

module.exports = router;
