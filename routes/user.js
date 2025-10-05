const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const isLoggedIn = require("../middleware.js");
const { saveRedirectUrl } = require("../middleware.js");
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.flash("success", "Welcome to Wanderlust");
    res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/users/signup");
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/users/login" }), (req, res) => {
    req.flash("success", "Welcome to Wanderlust again");
    let redirectUrl = req.session.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
});

router.get("/logout", (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        req.flash("success", "You have been logged out successfully");
        res.redirect("/listings");
    });
});

module.exports = router;