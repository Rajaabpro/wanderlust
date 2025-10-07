const express = require("express");
const router = express.Router();
const { isLoggedIn, validateListing, isOwner } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { index, new: newListing, showListing, createListing, editListing, updateListing, deleteListing, createReview, deleteReview } = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
router.route("/")
    .get(wrapAsync(index))
    .post(isLoggedIn, validateListing, wrapAsync(createListing));

router.get("/new", isLoggedIn, wrapAsync(newListing));

router.route("/:id")
    .get(wrapAsync(showListing))
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));

router.get("/:id/edit", isLoggedIn, wrapAsync(editListing));

router.post("/:id/reviews", isLoggedIn, wrapAsync(createReview));

router.delete("/:id/reviews/:reviewId", isLoggedIn, wrapAsync(deleteReview));

module.exports = router;