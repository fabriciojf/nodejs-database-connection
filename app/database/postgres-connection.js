// default settings
var config = require('../config/default-config');
var pg = require('pg');

// connection prototype
function PostgresConnection() {
    this.connectionString = config.postgres.connectionString;
    this.pool = new pg.Pool(config.postgres.poolSettings);
}

PostgresConnection.prototype = {

    create: function (userJson, callback) {

        this.pool.connect(function (err, client, done) {
            if(err) {
                return callback(error(err, 'error fetching client from pool'));
            }

            client.query('INSERT INTO users SET ?', userJson, function (err, result) {
                done();
                if(err) {
                    return callback(error(err, 'error running query'));
                }
                return callback({success: true, data: result});
            });
        });
    },

    findByName: function (name, callback) {
        this.pool.connect(function(err, client, done) {
            if(err) {
                return callback(error(err, 'error fetching client from pool'));
            }
            client.query('SELECT * FROM users WHERE name = $1', name, function(err, result) {
                done();

                if(err) {
                    return callback(error(err, 'error running query'));                    
                }
                return callback({success: true, data: result.rows});
            });
        });       
    },

    findAll: function (callback) {

        this.pool.connect(function(err, client, done) {
            if(err) {
                return callback(error(err, 'error fetching client from pool'));
            }

            client.query('SELECT * FROM users', queryReturn);
            function queryReturn (err, result) {
                done();

                if(err) {
                    return callback(error(err, 'error running query'));                  
                }
                return callback({success: true, data: result.rows});
            };
        });    
    },

    remove: function (name, callback) {
        this.pool.connect(function(err, client, done) {
            if(err) {
                return callback(error(err, 'error fetching client from pool'));
            }

            client.query('DELETE FROM users WHERE name = $1', name, queryReturn);
            function queryReturn (err, result) {
                done();

                if(err) {
                   return callback(error(err, 'error running query'));                
                }
                return callback({success: true, data: result.rows});
            };
        });  
    }
}

function formatError(err, message) {
    return {
        succes: false,
        message: message,
        error: err
    };
}

module.exports = PostgresConnection;