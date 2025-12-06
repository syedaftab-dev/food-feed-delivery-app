const express = require("express")
const authController = require("../controllers/auth.controller")
// creating an authentication api/server/route and its logic is written in auth.controller.js

const router = express.Router();

// routes/APIs for USER's
router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)



// Routes/APIs for FoodPartner's
router.post('/food-partner/register',authController.registerFoodPartner);
router.post('/food-partner/login',authController.loginFoodPartner);
router.get('/food-partner/logout',authController.logoutFoodPartner)

module.exports = router;