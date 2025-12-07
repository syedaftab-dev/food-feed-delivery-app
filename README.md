## Reels Style Video Feed Integration Wesite :

Backend folder


- Step 1- intializing and important modules
    1. npm init -y      ---     initiating project 
    2. npm i express    ---  for express lib
    3. make server.js and app.js files
    4. npx nodemon server.js   ----  to run the server also updates modified changes in the server by restrating it automatically
    5. npm i bcryptjs  --- to hash passwords
    6. npm i jsonwebtoken cookie-parser  --- to create token for user and cookie-parser if the already register user logins back
    7. npm i dotenv  -- to use process.env.variable_name 
    8.  npm i multer  -- express server cant read files from frontend like video,images for this we use this middleware
    9. npm i uuid -- to use uuid  - ie unique id for fileName

- Step 2-
    Connecting to Database-MongoDB
    1. npm i mongoose -- for mongoDB database thing
    2. Make a folder db inside src and a file name db.js
- Step 3-
    Folders
    1. models  --- schema of different collections of database
    2. db -- for Database things,like connecting etc
    3. routes -- we will create all neccessary routes here
    4. controllers --- it contains the main logic of routes created in routes table
        
# Cloud Storage Provider
 give memory for us to upload files ex: Google Drive,OneDrive etc

    here we are using "imagekit.io"
    1. it provide string for files to access them
    2. 3 things are important and keep them private and secure
        i.  private_key
        ii. public_key
        iii.Url

refer imagekit docs github for usage
    1. npm install imagekit 

# POSTMAN
    To test API's and Development