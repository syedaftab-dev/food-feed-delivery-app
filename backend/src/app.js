// we wil create servers in this file
// bring all the routes here
const express = require("express");
const app=express();
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')
const cookieParser = require("cookie-parser")

// cors for browsers cors policy
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// a middleware to read data from frontend,data tho atha hai par req.body main nai atha,aur make it readable
app.use(express.json());
// cookie middleware
app.use(cookieParser());

// home page route
app.get("/",(req,res)=>{
    res.send("Hell World!");
})

// use auth route ie register or login
app.use('/api/auth',authRoutes);
// '/api/auth' -> prefix and authRoutes--user/register
// combinely -- localhost:3000/api/auth/user/register   -- to access the register route

// routes for adding food item
app.use('/api/food',foodRoutes);




module.exports = app;