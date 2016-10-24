// imports
var router = require('express').Router();
var user = require('../model/user.model');
var Conn = require("../database/postgres.connection");

router.post('/', function (req, res) {
    postgres = new Conn();
    postgres.create('fabricio', 'fabriciojf@gmail.com', '123', function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.get('/name', function (req, res) {
    postgres = new Conn();
    postgres.findByName('fabricio', function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.get('/', function (req, res) {
    postgres = new Conn();
    postgres.findAll(function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.delete('/', function (req, res) {
    postgres = new Conn();
    postgres.remove('fabricio', function(data){
        console.log(data);
        res.json(data);
    }); 
});

module.exports = router;