const mongoose = require("mongoose")

const likesSchema = new mongoose.Schema({
    user:{
        // reference of user liked the video
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    food :{
        // food item on which user liked
        type: mongoose.Schema.Types.ObjectId,
        ref: "food",
        required: true
    }
    
},{
    timestamps: true
})


const Like = mongoose.model('like',likesSchema)

module.exports = Like;