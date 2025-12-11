const foodPartnerModel = require("../models/foodpartner.model")
const foodModel = require("../models/food.model")

// to bring videos on food parner profile he has uploaded
async function getFoodPartnerById(req,res){
    // get the id of food partner from the req.
    const foodPartnerId = req.params.id;
    // get the foodparter with the above if received
    const foodPartner = await foodPartnerModel.findById(foodPartnerId)
    // using the foodPartner get the food items added my him
    const foodItemsByFoodPartner = await foodModel.find({
        foodPartner: foodPartnerId
    })

    if(!foodPartner){
        return res.status(401).json({
            message: "food partner not found"
        })
    }

    res.status(200).json({
        message:"food partner found",
        foodPartner:{
            ...foodPartner.toObject(),
            foodItems: foodItemsByFoodPartner
        }
    })
}

module.exports = getFoodPartnerById;