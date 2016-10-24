// imports
var router = require('express').Router();
var user = require('../model/user.model');
var Conn = require("../database/mongodb.connection");

router.post('/', function (req, res) {
    mongo = new Conn();
    mongo.create('fabricio', 'fabriciojf@gmail.com', '123', function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.get('/name', function (req, res) {
    mongo = new Conn();
    mongo.findByName('fabricio', function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.get('/', function (req, res) {
    mongo = new Conn();
    mongo.findAll(function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.delete('/', function (req, res) {
    mongo = new Conn();
    mongo.remove('fabricio', function(data){
        console.log(data);
        res.json(data);
    }); 
});

module.exports = router;