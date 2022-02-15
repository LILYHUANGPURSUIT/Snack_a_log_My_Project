// DEPENDENCIES
const cors = require("cors")
const snackController = require("./controllers/snackController");

const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// require("dotenv").config();

// ROUTES
app.get("/",(req, res) =>{
    res.send("Get Snack'n at Snack-a-log!")
});

app.use("/snacks", snackController);

app.get("*", (req, res) => {
    res.status(404).json("Page not found!")
});

// EXPORT
module.exports = app;
