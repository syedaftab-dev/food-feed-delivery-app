// we wil create servers in this file

const express = require("express");
const app=express();
const cookieParser = require("cookie-parser")
// a middleware to read data from frontend,data tho atha hai par req.body main nai atha,aur make it readable
app.use(express.json());
// cookie middleware
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Hell World!");
})

module.exports = app;