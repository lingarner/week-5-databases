# Overview

If you look in the model folder in the index.js, that is where we are connecting to the MongoDB database. There is a mongodb dependency that I installed in order to access the MongoDB objects. I used a connection string, which I got from the cluster I created using the MongoDB interface. I stored that in my .env file for more security. For each call to the database (GET route) I initalize a new MongoDB Client Object and connect using the connection string.

I want to create a website for my dad to host his hikinh pictures on, but in order to access those picture I want to be able to grab them from a databse dynamically.

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

- MongoDB

The application runs using Node. THe start command (npm start) runs the server.js and from there the code used the uri and goes to the routes folder. The routes folder hwlp direct the application on what to retrive based off the uri. The controller and model are called in the routes and those file are what interact with the database.

# Development Environment

- Node.js
- Express.js
- Nodemon
- Thunder Client (REST API)

# Useful Websites

- [MongoDB Cloud Databases](https://www.mongodb.com/cloud-database)
- [How to Connect Node.js App to MongoDB](https://www.youtube.com/watch?v=bhiEJW5poHU)

# Future Work

- Add a front end
- Have users able to add pictures to database
- Allow users to enter new data to database
