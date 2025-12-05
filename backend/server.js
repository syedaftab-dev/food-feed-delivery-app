// Start the server from here       
require('dotenv').config(); // to access env variables

app = require("./src/app");
const connectDB =  require("./src/db/db");

connectDB();

// start the server
app.listen(3000,()=>{
    console.log("server is running")
})
