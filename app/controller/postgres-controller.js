// User data example
var userData = require('../config/user-data');

// Connection
var pgConnection = require('../database/postgres-connection');

function PostgresController() {}
PostgresController.prototype = {

  create: function (req, res) {
      var postgres = new pgConnection();
      postgres.create(userData, createCb); 
      
      function createCb(data){
          res.json(data);
      }; 
  },

  findByName: function (req, res) {
      var postgres = new pgConnection();
      postgres.findByName([req.params.name], findByNameCb); 
      
      function findByNameCb(data) {
          res.json(data);
      }; 
  },

  findAll: function (req, res, next) {
      var postgres = new pgConnection();
      postgres.findAll(findAllCb); 

      function findAllCb(data) {
        res.json(data);
      }
  },

  remove: function (req, res) {
      var postgres = new pgConnection();
      postgres.remove([req.params.name], findAllCb); 

      function findAllCb(data) {
        res.json(data);
      }
  }
}

module.exports = PostgresController;