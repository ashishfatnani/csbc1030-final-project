const Comment = require("../models/Comments");
const User = require("../models/Users");

/*  @desc -> Get All comments for a post
    @route -> GET /posts/:postId/comments
*/
exports.getAllComments = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);

    const commentsData = await Comment.findAll({
      where: { postId: postId },
    });

    if (commentsData.length) {
      return res.status(200).json({
        success: true,
        data: commentsData,
        message: "Successfully returned all Comments for this Post",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "No Comments for this Post",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Create a comment under a post 
    @route -> GET /posts/:postId/comments
*/
exports.createComment = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);

    const userObj = await User.findByPk(req.user.id);

    const { body } = req.body;
    const newCoomentObj = {
      postId: postId,
      name: userObj.dataValues.name,
      email: userObj.dataValues.email,
      body,
    };

    const commentData = await Comment.create({
      postId: postId,
      name: userObj.dataValues.name,
      email: userObj.dataValues.email,
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

/*  @desc -> Update a comment under a post 
    @route -> PUT /posts/:postId/comments
*/
exports.updateComment = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);
    const email = req.user.email;
    const { body } = req.body;

    const comment = await Comment.findOne({
      where: { id: commentId, email, postId },
    });

    if (comment) {
      const updateData = await Comment.update(
        { body },
        { where: { id: commentId, postId, email } }
      );
      return res.status(200).json({
        success: true,
        message: "Successfully updated Comment",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Comment was't found !",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Delete a comment under a post 
    @route -> DELETE /posts/:postId/comments
*/
exports.deleteComment = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);
    const email = req.user.email;

    const comment = await Comment.findOne({
      where: { id: commentId, email, postId },
    });
    if (comment) {
      const updateData = await Comment.destroy({
        where: { id: commentId, email, postId },
      });
      return res.status(200).json({
        success: true,
        message: "Successfully Deleted Comment",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Comment was't found !",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
