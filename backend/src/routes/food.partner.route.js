const express = require("express")
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware")
const foodPartnerController = require("../controllers/food-partner.controller")
// GET /api/foof-partner/:id   for food partner profile   
router.get("/:id",authMiddleware.authUserMiddleware,foodPartnerController.getFoodPartnerById)


module.exports = router;