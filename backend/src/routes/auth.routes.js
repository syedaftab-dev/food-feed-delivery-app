const express = require("express")
const authController = require("../controllers/auth.controller")
// creating an authentication api/server/route and its logic is written in auth.controller.js

const router = express.Router();

router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)

module.exports = router;