
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient,
ObjectID = require('mongodb').ObjectID,
assert = require('assert');

var db;
var url = 'mongodb://localhost:27017/plate';

mongo.connect(url, function(err, database) {
  assert.equal(null, err);
  db = database;
  console.log("Connected to the Plate Base!!");
  //can't close it here db.close();
  });

//get all plates
router.get('/plates', function (req, res, next) {
  db.collection('plates').find({}).toArray(function(err, plates){
    if(err){
      res.send(err);
    }
    res.json(plates);
  })
});

//get one plate by id
router.get('/plate/:id', function (req, res, next) {
  var plateID = new ObjectID(req.params.id);
  db.collection('plates').find({_id: plateID }).toArray(function(err, plates){
    if(err){
      res.send(err);
    }
    res.json(plates);
  })
});

//need to write post request for plates and validate data in the plate request.

module.exports = router;
