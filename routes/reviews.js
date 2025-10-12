const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const reviewController = require("../controllers/reviews.js");
const {validateReview, isLoggedIn} = require("../authMiddleware.js");

//Post Review Route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;