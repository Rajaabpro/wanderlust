const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const defaultImage = "https://unsplash.com/photos/golden-mountain-peaks-at-sunset-with-dramatic-clouds-IyhdFcaRYqE";
const listingSchema = new Schema({
    title:{
        type: String, 
        required: true
    },
    description: String,
    image:{
        type: String,
        default: defaultImage,
        set: (v) => v === "" ? defaultImage : v,
    },
    price: Number,
    location: String,
    country: String,
});
 
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
    