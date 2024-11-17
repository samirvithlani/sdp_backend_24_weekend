const config = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());




// Connect to MongoDB
mongoose.connect(config.DB_URL).then(() => {
    console.log("Connected to MongoDB...");
}).catch((err) => {
    console.log("Error connecting to MongoDB...", err);
})

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
})