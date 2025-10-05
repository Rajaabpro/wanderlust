const Listing = require("./models/listing.js");
const { reviewSchema, listingSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to do that");
        return res.redirect("/users/login");
    }
    next();
}


module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const { currentUser } = req;
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!currentUser || !listing.owner.equals(currentUser._id)) {
        req.flash("error", "You are not authorized to do that");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        req.flash("error", error.message);
        return res.redirect(`/listings/${req.params.id}`);
    }
    next();
}

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        req.flash("error", error.message);
        return res.redirect(`/listings/${req.params.id}`);
    }
    next();
}