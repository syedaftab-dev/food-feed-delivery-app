## Reels Style Video Feed Integration Wesite :

Backend folder


- Step 1- intializing and important modules
    1. npm init -y      ---     initiating project 
    2. npm i express    ---  for express lib
    3. make server.js and app.js files
    4. npx nodemon server.js   ----  to run the server also updates modified changes in the server by restrating it automatically
    5. npm i bcryptjs  --- to hash passwords
    6. npm i jsonwebtoken cookie-parser  --- to create token for user and cookie-parser if the already register user logins back

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
        
# POSTMAN
    To test API's and Development