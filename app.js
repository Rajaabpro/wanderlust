if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
console.log(process.env.KEY);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listingRoutes = require("./routes/listing.js");
const reviewRoutes = require("./routes/reviews.js");
const session = require("express-session");
const mongoStore = require("connect-mongo");
  // const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const user = require("./models/user.js");
const userRoutes = require("./routes/user.js");

const dbUrl = "mongodb://127.0.0.1:27017/wanderlust";

const store = mongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret:"secret",
  },
  touchAfter: 24 * 3600,
});

store.on("error", function(e) {
  console.log("SESSION STORE ERROR", e);
});

const sessionConfig = {
  store,
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + (1000 * 60 * 60 * 24 * 30),
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  }
}
// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });


sessionConfig.store = store;
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});



app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).send(`<h1>Error ${statusCode}</h1><p>${err.message}</p>`);
  next();
});
main()
  .then(() => {
    console.log("connected to DB");
  })  
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);


app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});