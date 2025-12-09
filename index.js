require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/router");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.use("/", router);

app.listen(3000, console.log("Server running at http://localhost:3000/"));