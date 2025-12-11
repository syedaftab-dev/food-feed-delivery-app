const foodModel = require('../models/food.model')
const storageService = require("../services/storage.service")
const { v4: uuid}  = require("uuid")
const Like = require("../models/likes.model")
const saveModel = require("../models/save.model")
async function createFood(req,res){
     console.log(req.foodPartner);

     // req reached to server from frontend contain data is req.body
     console.log(req.body)

    // file server pe hai lekin hum isse ya save nai karthe,isse cloud storage(ex G-drive,onedrive etc) providers pe karthe kui ki ssd,hdd cant be access from here
    console.log(req.file); // to access files like video,img,pdf etc

    // Add a check to ensure a file was uploaded
    if(!req.file){
        return res.status(400).json({
            message: "No file uploaded. Please upload a video."
        })
    }

    // uploading file to cloud storage
    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    // uuid -> will generate a unique id every time called
    console.log(fileUploadResult)

    // adding food item to DB
    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "food item created successfully",
        food: foodItem
    })
}


// logic for user to get videos
 async function getFoodItems(req,res){

    const foodItems = await foodModel.find({
    })
    res.status(200).json({
        message: "food items fetched successfully",
        foodItems
    })
 }

 //logic ,when a user like a video 
async function likeFood(req,res){
    // get the food id
    const {foodId} = req.body;
    const user = req.user;
    // check if user had already liked,bcoz 1 user can like once
    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food: foodId
    })
    
    // if liked already,delete that extra like

    if(isAlreadyLiked){
        await likeModel.deleteOne({
            user: user._id,
            food: foodId
        })

        //update the like count and decrease it
        await foodModel.findByIdAndUpdate(foodId,{
            $inc: {
                likeCount: -1
            }
        })
        return res.status(200).json({
            message: "food unliked successfully"
        })
    }
    // if not liked then create a like object
    const like = await likeModel.create({
        user: user._id,
        food: foodId
    })
    // increase the liek count
    await foodModel.findByIdAndUpdate(foodId,{
        $inc:{likeCount: 1}
    })
    res.status(200).json({
        message: "food liked successfully"
    })
} 

//logic to save likes

async function saveFood(req,res){
    const {foodId} = req.body;
    const user = req.user;
    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if(isAlreadySaved){
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })
        await foodModel.findByIdAndUpdate(foodId,{
            $inc : {savesCount: -1}
        })
        return res.status(200).json({
            message: "food unsaved successfully"
        })
    }
    const save = await saveModel.create({
        user: user._id,
        food: foodId
    
    })
    await foodModel.findByIdAndUpdate(foodId,{
        $inc: {savesCount: 1}
    })
    res.status(200).json({
        message: "food saved successfully"
    })

}

// logic to get saved video
async function getSaveFood(req,res){
    const user = req.user;

    const savedFoods = await saveModel.find({user: user._id}).populate('food')

    if(!savedFoods || savedFoods.length === 0){
        return res.status(404).json({
            message: "No saved food found"
        })
    }
    res.status(200).json({
        message: "Saved foods retrieved successfully",
        savedFoods
    })
}

module.exports ={ 
    createFood,
    getFoodItems,
    likeFood,
    saveFood,
    getSaveFood
};