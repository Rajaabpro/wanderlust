const Listing = require("./models/listing.js");
const { reviewSchema, listingSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to do that");
        return res.redirect("/users/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
         console.log("Inside isOwner. Params:", req.params);
    console.log("Body:", req.body);
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }
        if (!req.user || !listing.owner.equals(req.user._id)) {
            req.flash("error", "You are not authorized to do that");
            return res.redirect(`/listings/${id}`);
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        req.flash("error", error.message);
        return res.redirect("/listings/new");
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        req.flash("error", error.message);
        return res.redirect(`/listings/${req.params.id}`);
    }
    next();
};