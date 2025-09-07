const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing");

const MONGO_URI = "mongodb://localhost:27017/wanderlust";
main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URI);
}

app.get("/", (req, res) => {
    res.send("Hi im root");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
    
const Listing = mongoose.model("Listing", listingSchema);