const Post = require("../models/Posts");

/*  @desc -> Create Posts 
    @route -> POST /posts
*/
exports.createPost = async (req, res) => {
  const userId = req.user.id;
  try {
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(400).json({
        success: false,
        message: "Title & Body is required!",
      });
    }
    const postData = await Post.create({
      userId,
      title,
      body,
    });

    return res.status(201).json({
      success: true,
      data: postData,
      message: "Successfully createad Post",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Get all my posts 
    @route -> GET /posts
*/
exports.getAllPosts = async (req, res) => {
  const userId = req.user.id;
  try {
    const postData = await Post.findAll({
      where: { userId },
    });

    return res.status(200).json({
      success: true,
      data: postData,
      message: "Successfully returned all posts",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.getSinglePost = async (req, res) => {
  const userId = req.user.id;
  const postId = req.params.id;
  try {
    const postData = await Post.findOne({ where: { id: postId, userId } });
    return res.status(200).json({
      success: true,
      data: postData,
      message: "Successfully returned post",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.updatePost = async (req, res) => {
  const userId = req.user.id;
  const postId = req.params.id;
  const { body } = req.body;
  try {
    const postData = await Post.findOne({ where: { id: postId, userId } });

    if (postData) {
      const updateData = await Post.update({ body });
      return res.status(200).json({
        success: true,
        data: updateData,
        message: "Successfully updated Post",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Post wasn't found!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
