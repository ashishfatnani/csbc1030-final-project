const User = require("../models/Users");

/*  @desc -> Get Users 
    @route -> GET /users
*/
exports.getAllUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    return res.status(200).json({
      success: true,
      data,
      message: "Successfully returned all users data",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
