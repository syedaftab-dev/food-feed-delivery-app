const foodModel = require('../models/food.model')
const storageService = require("../services/storage.service")
const { v4: uuid}  = require("uuid")

async function createFood(req,res){
     console.log(req.foodPartner);

     // req reached to server from frontend contain data is req.body
     console.log(req.body)

    // file server pe hai lekin hum isse ya save nai karthe,isse cloud storage(ex G-drive,onedrive etc) providers pe karthe kui ki ssd,hdd cant be access from here
    console.log(req.file); // to access files like video,img,pdf etc

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


module.exports ={ 
    createFood
};