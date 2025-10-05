const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const isLoggedIn = require("../middleware.js");
const { isOwner } = require("../middleware.js");

router.get("/", isLoggedIn, wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

router.get("/new", isLoggedIn, isOwner, (req, res) => {
    res.render("listings/new.ejs");
});

router.get("/:id", isLoggedIn, isOwner,wrapAsync(async (req, res) => {
    const { id } = req.params;
    
    // Check if id is a valid ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(400, "Invalid listing ID format");
    }
    
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    console.log(listing);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", { listing });
}));

router.post("/", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const { error } = listingSchema.validate(req.body);
    if (error) throw new ExpressError(400, error.message);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    
    await newListing.save();
    req.flash("success", "New Listing created successfully");
    res.redirect("/listings");
}));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

router.put("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);

    

    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

router.post("/:id/reviews", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const { error } = reviewSchema.validate(req.body);
    if (error) throw new ExpressError(400, error.message);
    const newReview = new Review(req.body.review);
    await newReview.save();
    listing.reviews.push(newReview);
    await listing.save();
    res.redirect(`/listings/${id}`);
}));

router.delete("/:id/reviews/:reviewId", isLoggedIn, isOwner,    wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));


module.exports = router;