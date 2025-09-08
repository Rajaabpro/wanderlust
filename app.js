const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing");
const path = require("path");

const MONGO_URI = "mongodb://localhost:27017/wanderlust";
main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URI);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hi im root");
});
//index Route
app.get("/Listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings})
});

//show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

// app.get("/testListings", async (req, res) => {
//     let samleListings = new Listing({
//         title: "Sample Listing 1",
//         description: "This is a sample listing 1",
//         image: "https://via.placeholder.com/150",
//         price: 100,
//         location: "New York",
//         country: "USA"
//     });
//     await samleListings.save();
//     res.send("Listings saved to database successfully");
// });
    
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
