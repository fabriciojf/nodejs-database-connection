// imports
var router = require('express').Router();
var user = require('../model/user-model');
var Conn = require("../database/mysql-connection");

router.post('/', function (req, res) {
    mysql = new Conn();
    var userJson = {
        name: 'Fabricio',
        email: 'fabriciojf@gmail.com',
        password: '123'
    }
    
    mysql.create(userJson, function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.get('/name', function (req, res) {
    mysql = new Conn();
    mysql.findByName('fabricio', function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.get('/', function (req, res) {
    mysql = new Conn();
    mysql.findAll(function(data){
        console.log(data);
        res.json(data);
    }); 
});

router.delete('/', function (req, res) {
    mysql = new Conn();
    mysql.remove('fabricio', function(data){
        console.log(data);
        res.json(data);
    }); 
});

module.exports = router;