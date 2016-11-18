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
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }

            client.query('INSERT INTO users SET ?', userJson, function (err, result) {
                done();
                if (err) {
                    return callback({
                        success: false,
                        error: err
                    });
                }
                return callback({ 
                    success: true, 
                    data: result 
                });
            });
        });
    },

    findByName: function (name, callback) {
        this.pool.connect(function (err, client, done) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }
            client.query('SELECT * FROM users WHERE name = $1', name, function (err, result) {
                done();

                if (err) {
                    return callback({
                        success: false,
                        error: err
                    });
                }
                return callback({ 
                    success: true, 
                    data: result.rows 
                });
            });
        });
    },

    findAll: function (callback) {

        this.pool.connect(function (err, client, done) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }

            client.query('SELECT * FROM users', queryReturn);
            function queryReturn(err, result) {
                done();

                if (err) {
                    return callback({
                        success: false,
                        error: err
                    });
                }
                return callback({ 
                    success: true, 
                    data: result.rows 
                });
            };
        });
    },

    remove: function (name, callback) {
        this.pool.connect(function (err, client, done) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }

            client.query('DELETE FROM users WHERE name = $1', name, queryReturn);
            function queryReturn(err, result) {
                done();

                if (err) {
                    return callback({
                        success: false,
                        error: err
                    });
                }
                return callback({ 
                    success: true, 
                    data: result.rows 
                });
            };
        });
    }
}

module.exports = PostgresConnection;