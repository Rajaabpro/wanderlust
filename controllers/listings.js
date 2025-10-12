const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

console.log("Map token in controller:", mapToken);

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.new = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    res.render("listings/show.ejs", { listing, mapToken, listingCoordinates: listing.geometry.coordinates });
}

module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
  let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/uploads","upload/w_400");
    listing.image.url = originalImageUrl;
    res.render("listings/edit.ejs", { listing,originalImageUrl });
}

module.exports.createListing = async (req, res) => {
    let response = await geoCodingClient
    .forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send()

    console.log("Geocoding response:", response.body);

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image.url = url;
    newListing.image.filename = filename;
// Set geometry from geocoding response with error handling
    if (response.body.features && response.body.features.length > 0) {
        newListing.geometry.type = "Point";
        newListing.geometry.coordinates = response.body.features[0].geometry.coordinates;
    } else {
        console.error("No geocoding results found for:", req.body.listing.location);
        req.flash("error", "Could not find location coordinates");
        return res.redirect("/listings/new");
    }
    
    await newListing.save();
    req.flash("success", "New Listing created successfully");
    res.redirect("/listings");
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    
    // Safety check for req.body.listing
    if (!req.body.listing) {
        req.flash("error", "Invalid form data");
        return res.redirect(`/listings/${id}/edit`);
    }
    
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image.url = url;
        listing.image.filename = filename;
    }
   
    await listing.save();
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}
module.exports.createReview = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const newReview = new Review(req.body.review);
    await newReview.save();
    listing.reviews.push(newReview);
    await listing.save();
    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}