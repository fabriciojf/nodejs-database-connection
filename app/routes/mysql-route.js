// imports
var router = require('express').Router();

// controllers
var mysqlController = require("../controller/mysql-controller");

// objects
var mysql = new mysqlController();

// routes
router.get('/', mysql.findAll);
router.get('/:name', mysql.findByName);
router.post('/', mysql.create);
router.delete('/:name', mysql.remove);

module.exports = router;