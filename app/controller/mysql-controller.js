// User data example
var userData = require('../config/user-data');

// Connection
var mySqlConnection = require("../database/mysql-connection");

function MysqlController() { }
MysqlController.prototype = {

  create: function (req, res) {
    mysql = new mySqlConnection();
    mysql.create(userData, function (data) {
      res.json(data);
    });
  },

  findByName: function (req, res) {
    mysql = new mySqlConnection();
    mysql.findByName([req.params.name], function (data) {
      res.json(data);
    });
  },

  findAll: function (req, res) {
    mysql = new mySqlConnection();
    mysql.findAll(function (data) {
      res.json(data);
    });
  },

  remove: function (req, res) {
    mysql = new mySqlConnection();
    mysql.remove([req.params.name], function (data) {
      res.json(data);
    });
  }
}

module.exports = MysqlController;