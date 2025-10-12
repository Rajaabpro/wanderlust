const express = require("express");
const router = express.Router();
const { isLoggedIn, validateListing, isOwner } = require("../authMiddleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn, 
        upload.single("listing[image]"),
        wrapAsync(listingController.createListing));

router.get("/new", isLoggedIn, listingController.new);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.editListing));

router.post("/:id/reviews", isLoggedIn, wrapAsync(listingController.createReview));

router.delete("/:id/reviews/:reviewId", isLoggedIn, wrapAsync(listingController.deleteReview));

module.exports = router;