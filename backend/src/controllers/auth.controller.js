// main logic of route /user/register/login ie creating a user and its properties
const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function registerUser(req,res){
    
    const {fullName,email,password} = req.body;
    // checks whether the user is already present while registering a  new account
    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    // agar user already hai tho error bhejo usse
    if(isUserAlreadyExists){
        return res.status(400).json({
            Message: "User already exists"
        })
    }
    // if user is not present then we add the user 
    // 1. Hash the password before adding and salt/round -10
    const hashedPassword = await bcrypt.hash(password, 10);
    // 2. creating the user object for collection
    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })
    // 3. creating jsonweb token - must be unique : by using user._id and JWT secret key, we can generate from a generator
    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token); // saving in cookie as token

    // 201 -> when a new resource is created,give message and user details
    // ******(accept password - for security reason)****
    res.status(201).json({
        message: "user registered succesfully",
        user:{
            _id: user._id,
            email: user.email,
            fullName: user.fullName,
        }
    })
}

async function loginUser(req,res){

    const {email,password} = req.body;
    // 1.finding user in DB
    const user = await userModel.findOne({
        email
    })
    // 2. if not exist send 400 not found error
    if(!user){
        res.status(400).json({
            message: "Invalid email or password"
        })
    }
    // 3. if user exist in DB
    // check for valid password, compare given and database password
    const isPasswordValid = await bcrypt.compare(password,user.password);

    // if password doesnt match
    if(!isPasswordValid){
        res.status(400).json({
            message: "Invalid email or password"
        })
    }
    // if password is matched,then we generate a token

    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)

    // save in cookie
    res.cookie("token",token);
    // user login succesfully
    res.status(200).json({
        message: "user login successfully",
        user:{
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}
// if we have more controllers/function we cant just send it like below it will consider the last one only
// modules.export = registerUser
// module.exports = loginUser

// instead do 

module.exports = {
    registerUser,
    loginUser
}