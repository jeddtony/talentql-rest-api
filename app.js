const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
dotenv.config();
let forms = multer();


// const MONGODB_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@127.0.0.1:27017/${process.env.MONGO_DATABASE}`;

global.__basedir = __dirname;
global.__baseUrl = process.env.BASE_URL;

// Setup cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(forms.array("file"));


// Import Routes 
const userRoutes = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const exampleRoute = require("./routes/exampleRoute");
const postRoute = require("./routes/postRoute");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  app.use("/", userRoutes);
  app.use("/", authRoute);
  app.use("/", exampleRoute);
  app.use("/posts", postRoute)

// process.exit();

module.exports = app;