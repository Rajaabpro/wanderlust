const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listingRoutes = require("./routes/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + (1000 * 60 * 60 * 24 * 30),
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  }
}

app.use(session(sessionConfig));

main()
  .then(() => {
    console.log("connected to DB");
  })  
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});
app.use("/listings", listingRoutes);


app.listen(3000, () => {
  console.log("server is listening on port 3000");
});