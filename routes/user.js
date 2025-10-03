const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.js");

router.get("/signup", (req, res) => {
    res.render("users/signup");
});


module.exports = router;