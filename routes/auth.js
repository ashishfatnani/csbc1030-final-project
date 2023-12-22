const express = require("express");
const router = express.Router({ mergeParams: true });

const { loginUsers, registerUsers } = require("../controllers/auth");

router.route("/login").post(loginUsers);
router.route("/register").post(registerUsers);

module.exports = router;
