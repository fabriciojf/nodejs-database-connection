// imports
var router = require('express').Router();

// controllers
var mongoController = require("../controller/mongodb-controller");

// objects
var mongo = new mongoController();

// routes
router.get('/', mongo.findAll);
router.get('/:name', mongo.findByName);
router.post('/', mongo.create);
router.delete('/:name', mongo.remove);

module.exports = router;