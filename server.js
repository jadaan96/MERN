const express = require("express");
const mongoose = require("mongoose");
const approuter = require('./routes/approute');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Make sure to invoke express.json as a function

// Use your routes
app.use('/', approuter);

mongoose.connect(
  "mongodb+srv://jadaan:4726530@cluster0.ypzuss2.mongodb.net/first"
);

app.listen(3000, () => {
  console.log("Server is up and running");
});
