// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
"use strict";


var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var results = {
    "wins": 0,
    "lose": 0
};


app.use(bodyParser.json());



app.get("/stats", function(req, res) {

    res.send(results);
});

app.post("/flip", function(req, res) {
    var val = (Math.floor(Math.random() * 2) === 0) ? "heads" : "tails";



    console.log(val);
    if (val === req.body.call) {
        results.wins += 1;
        res.json({
            "results": "wins"
        });

        console.log("You Won " + results.wins + " times");
        console.log("You lost " + results.lose + " times");
    } else {
        results.lose += 1;
        res.json({
            "results": "lose"
        });
        console.log("You Won " + results.wins + " times");
        console.log("You lost " + results.lose + " times");
    }

});



var port = 3000;
app.listen(port, function() {
    console.log("listening on http://localhost:", port);
});