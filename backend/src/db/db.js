// to connect the Database ie MONGODB

const mongoose = require("mongoose")


// connecting to database code but we will start it from server.js
function  connectDB(){
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("MonogDb is connected!");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:",err);
    })
}

module.exports = connectDB;