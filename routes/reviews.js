const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) throw new ExpressError(400, error.message);
    next();
};

router.post("/", validateReview, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const newReview = new Review(req.body.review);
    await newReview.save();
    listing.reviews.push(newReview);
    await listing.save();
    res.redirect(`/listings/${id}`);
}));
module.exports = router;