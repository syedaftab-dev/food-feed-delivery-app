const foodPartnerModel = require("../models/foodpartner.model")
const jwt=require("jsonwebtoken")

// jab food-partner register/login kartha tho token cookie main save hotha usse read karne ke waaste middleware user kare the express.json
// par wo fir bhi server read nhi kar patha isliye ya hum middle ware banare

async function authFoodPartnerMiddleware(req,res,next){

    // check for token is available or not
    const token = req.cookies.token;
    // if token is not available return  - ie foodpartner not registered
    if(!token){
       return res.status(401).json({
            message: "Please login first"
        })
    }
    // if token exist
    try{
        // verify the token it takes token and jwt secret
        // jab hun jwt.sign karke token banayethe id dekar wo decoded main abhi as an object
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // if token is wrong it will give error and is catched below

        // if token is corect
        // find that foodpartner using his id available in token
        const foodPartner = await foodPartnerModel.findById(decoded.id);

        // if food partner does not exist in the database
        if (!foodPartner) {
            return res.status(404).json({
                message: "Food partner not found."
            });
        }

        // we r creating a new property in req named foodPartner as foodPartner
        req.foodPartner = foodPartner;

        next();

    }catch(err){
        // 401 -> unauthorized access
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

// isse hun food.controller.js main karinge
module.exports = {
    authFoodPartnerMiddleware
};