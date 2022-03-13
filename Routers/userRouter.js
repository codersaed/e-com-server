const router = require("express").Router();
const { signIn, signUp } = require("../controllers/userControllers.js");

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
