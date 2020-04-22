var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// create all routes and setup logic within those routes

router.get("/", function(req,res) {
burger.all(function(data) {
    var hbsObject = {
        burgers = data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
});

// router.post("/api/burgers", function(req, res) {
//     burger.create ( [
//         eat
//     ]

//     )
// })
})

module.exports = router;