const jwt = require("jsonwebtoken");
const JWT_SECRET = "someRandomToken";
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/*  @desc -> POST login users 
    @route -> POST /login
*/
exports.loginUsers = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Find the user with the given username
    const user = await User.findOne({ where: { userName } });

    if (!user) {
      return res.status(401).send("Invalid username or password");
    }

    //Compare the password of that particualr user
    const isPasswordValid = await bcrypt.compare(
      password,
      user.dataValues.password
    );

    if (!isPasswordValid) {
      return res.status(401).send("Invalid username or password");
    }

    // If authentication is successful, generate and return a JWT token
    const token = jwt.sign({ id: user.dataValues.id }, JWT_SECRET);

    return res.status(200).send({
      success: true,
      data: token,
      message: "Login succeessfully done!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/*  @desc -> Register a User 
    @route -> POST /register
*/
exports.registerUsers = async (req, res) => {
  try {
    const { name, email, password, userName, address, phone } = req.body;

    if (!name || !email || !password || !userName || !address || !phone) {
      return res.status(400).json({
        success: false,
        message:
          "Email ,name, userName, address, phone and Password is required!",
      });
    }

    const user = {
      ...req.body,
    };
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const newUser = await User.create({
      ...user,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      data: { name, email, userName },
      message: "Successfully returned the requested users data",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
