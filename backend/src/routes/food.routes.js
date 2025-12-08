const express = require("express")
const router = express.Router();
const foodController = require("../controllers/food.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const multer = require("multer")

// 
const upload = multer({
    storage: multer.memoryStorage(),
})


// iska logic food.controller.js main hai
// *******ADD FOOD ITEM*************

// api will be /api/food/ [protected]-> onlyy accessed by foodPartner not by users
// for protection - iskeliye middleware use karna - auth.middleware.js main hai

//                  protection                              food item added logic
router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodController.createFood); 
// video ki jagah kuch bhi dek=sakthe lekin forntend main bhi same dena yaad rakhna

// ****(zaruri bath)****** -> jab bhi upar wali route chalegi tho controll pahele authMiddleware.authFoodPartnerMiddleware pe jatha waha token hai ya nai check hotha aur ek property "foodPartner" banithi wo foodController.createFood ku milthe
// creatFood file main hum "foodPartner" ko access kar sakthe


// api/food/ [protected] -> users
// to get videos of food items for the user
router.get("/",authMiddleware.authUserMiddleware,foodController.getFoodItems)


module.exports = router; 