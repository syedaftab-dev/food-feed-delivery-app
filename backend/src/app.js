// we wil create servers in this file

// get the app from the server we can give any name here
const app = require("./src/app");

// lets create a route
app.get("/",(res,req)=>{
    res.send("Hello world!")
})

// start the server
app.listen(3000,()=>{
    console.log("server is running")
})