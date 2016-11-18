// imports
var router = require('express').Router();

// controllers
var pgController = require('../controller/postgres-controller.js');

// objects
var pg = new pgController();

// routes
router.get('/', pg.findAll);
router.get('/:name', pg.findByName);
router.post('/', pg.create);
router.delete('/:name', pg.remove);

module.exports = router;