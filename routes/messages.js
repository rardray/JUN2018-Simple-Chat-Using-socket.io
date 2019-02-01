var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var app = express();
var socket = require("socket.io");

mongoose.connect(process.env.MONGOLAB_URI);
var db = mongoose.connection;
db.on("error", function(msg) {
  console.log("Mongoose: Unable to connect ot database");
});

db.once("open", function() {
  console.log("Mongoose connected to messages database");
});
var Messages = require("../models/messages");

router.get("/", function(req, res) {
  Messages.find({}).exec(function(err, messages) {
    if (err) {
      console.log("error loading messages");
    } else {
      res.json(messages);
    }
  });
});

router.post("/add", function(req, res) {
  console.log(req.body);
  if (req.body.author === "" || req.body.message === "") {
    return res.status(422).send({ notice: "must complete form" });
  }
  var message = new Messages(req.body);
  message.save(function(err, result) {
    if (err) {
      res.status(404);
    } else {
      res.status(201).json(result);
    }
  });
});

module.exports = router;
