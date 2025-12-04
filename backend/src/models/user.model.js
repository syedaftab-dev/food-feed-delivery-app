const mongoose = require("mongoose")

// define the schema
const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type:String,
    }
},
    {
        timestamps: true
    }
)

// combining the schema with the model
const userModel = mongoose.model("user",userSchema)

module.exports = userSchema;