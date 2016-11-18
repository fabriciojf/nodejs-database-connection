// User data example
var userData = require('../config/user-data');

// Model
var user = require('../model/user-model');

// Connection
var mongoConnection = require("../database/mongodb-connection");

function MongodbController() { }
MongodbController.prototype = {

  create: function (req, res) {
    mongo = new mongoConnection();
    mongo.create(userData, function (data) {
      res.json(data);
    });
  },

  findByName: function (req, res) {
    mongo = new mongoConnection();
    mongo.findByName([req.params.name], function (data) {
      res.json(data);
    });
  },

  findAll: function (req, res) {
    mongo = new mongoConnection();
    mongo.findAll(function (data) {
      res.json(data);
    });
  },

  remove: function (req, res) {
    mongo = new mongoConnection();
    mongo.remove([req.params.name], function (data) {
      res.json(data);
    });
  }
}

module.exports = MongodbController;