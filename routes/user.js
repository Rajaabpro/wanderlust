const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const { signup, renderSignupForm, renderLoginForm, login, logout } = userController;

router.get("/signup", renderSignupForm);

router.post("/signup", wrapAsync(signup));

router.get("/login", renderLoginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local",{
    failureRedirect: "/login",
    failureFlash: true,
}), login);

router.get("/logout", logout);

module.exports = router;