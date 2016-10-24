// default settings
var config = require('./app/config/default.config');

// imports
var express = require('express');

// databases examples
var mongoRoute = require('./app/routes/mongo.route.js');
var mysqlRoute = require('./app/routes/mysql.route.js');
var postgresRoute = require('./app/routes/postgres.route.js');

// vars
var app = express();

// url basic return
// http://localhost:PORT/ 
app.get('/', function (req, res) {
    res.json({             
        success: true,
        'message': 'Server Up' 
    });    
});

// database routes
app.use('/mongo', mongoRoute);
app.use('/mysql', mysqlRoute);
app.use('/postgres', postgresRoute);

// server start
app.listen(config.server.port);
console.log(`Server Running: http://${config.server.host}:${config.server.port}`);