const Comment = require("../models/Comments");

exports.getAllComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentsData = await Comment.findAll({ postId });
    return res.status(200).json({
      success: true,
      data: commentsData,
      message: "Successfully returned all Comments for this Post",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.createComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userObj = req.user;
    const { body } = req.body;
    const commentData = await Comment.create({
      postId,
      name: userObj.name,
      email: userObj.email,
      body,
    });
    return res.status(201).json({
      success: true,
      data: commentData,
      message: "Successfully Created this post",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
