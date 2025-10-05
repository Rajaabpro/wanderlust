const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { index, new: newListing, showListing, createListing, editListing, updateListing, deleteListing, createReview, deleteReview } = require("../controllers/listings.js");


router.get("/", wrapAsync(index));

router.get("/new", isLoggedIn, newListing);

router.post("/", isLoggedIn, wrapAsync(createListing));

router.get("/:id", wrapAsync(showListing));

router.get("/:id/edit", isLoggedIn, wrapAsync(editListing));

router.put("/:id", isLoggedIn, wrapAsync(updateListing));

router.delete("/:id", isLoggedIn, wrapAsync(deleteListing));

router.post("/:id/reviews", isLoggedIn, wrapAsync(createReview));

router.delete("/:id/reviews/:reviewId", isLoggedIn, wrapAsync(deleteReview));

module.exports = router;