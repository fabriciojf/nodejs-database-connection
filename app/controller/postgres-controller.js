var Conn = require('../database/postgres-connection');

function PostgresController() {}

PostgresController.prototype = {

  create: function (req, res) {
      var postgres = new Conn();
      postgres.create(req.body, createCb); 
      
      function createCb(data){
          console.log(data);
          res.json(data);
      }; 
  },

  findByName: function (req, res) {
      var postgres = new Conn();
      postgres.findByName([req.params.name], findByNameCb); 
      
      function findByNameCb(data) {
          console.log(data);
          res.json(data);
      }; 
  },

  findAll: function (req, res, next) {
      var postgres = new Conn();
      postgres.findAll(findAllCb); 

      function findAllCb(data) {
        console.log(data);
        res.json(data);
      }
  },

  remove: function (req, res) {
      var postgres = new Conn();
      postgres.remove([req.params.name], findAllCb); 

      function findAllCb(data) {
        console.log(data);
        res.json(data);
      }
  }
}

module.exports = PostgresController;