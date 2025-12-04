// Start the server from here       

app = require("./src/app");

const connectDB =  require("./src/db/db");

connectDB();

// lets create a route
app.get("/",(req,res)=>{
    res.send("Hello world!")
})

// start the server
app.listen(3000,()=>{
    console.log("server is running")
})
