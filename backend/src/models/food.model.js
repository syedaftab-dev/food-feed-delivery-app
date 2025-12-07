// foood item Schema or Schema of food item added by foodPartner

const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    video:{
        type: String, // url of video
        required: true,
    }
    ,
    description:{
        type: String,
    },
    // which foodpartner has added and we need reference to foodPartner collection
    foodPartner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodpartner",
    }
})

const foodModel = mongoose.model("food",foodItemSchema);

module.exports = foodModel;