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
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings})
});
//create Route
app.post("/listings", async (req, res) => {
    let newListing = new Listing(req.body);
    await newListing.save();
    res.redirect("/listings");
});
//new Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});
//show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});
//edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});
//update Route
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body, {new: true});
    res.redirect(`/listings/${id}`);
});
//delete Route
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});
//edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});
//update Route
    
app.listen(3000, () => {
    console.log("Server started on port 3000");
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
