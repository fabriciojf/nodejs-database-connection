// imports
var router = require('express').Router();

// controllers
var pgController = require('../controller/postgres-controller.js');

// objects
var pg = new pgController();

// routes
router.post('/', pg.create);
router.get('/', pg.findAll);
router.delete('/:name', pg.remove);
router.get('/:name', pg.findByName);

module.exports = router;