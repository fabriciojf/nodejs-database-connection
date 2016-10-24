// default settings
var config = require('../config/default.config');

// connection prototype
function mysqlConnection() {
    var pg = require('pg');
    this.pool = new pg.Pool(config.postgres);

/**
    var user = config.postgres.user;
    var pass = config.postgres.pass;
    var host = config.postgres.host;
    var port = config.postgres.port;
    var database = config.postgres.database;

    this.connectionString = `postgres://${user}:${pass}@${host}:${port}/${database}`;
*/    
}

mysqlConnection.prototype = {

    create: function (userJson, callback) {

        this.pool.connect(function (err, client, done) {
            if (err) throw err;

            client.query('INSERT INTO users SET ?', userJson, function (err, result) {
                done();
                if (err) throw err;
                
                console.log("p4");
                callback({
                    success: true,
                    "message": "User created",
                    "userData": result
                });
            });
        });
    },

    findByName: function (name, callback) {
        con.connect(this.connectionString);
        con.query('SELECT * FROM users WHERE name = ?', name, function (err, res) {
            if (err) throw err;
            callback({
                success: true,
                "message": "find by name result",
                "userData": res
            });
        });
        con.end();
    },

    findAll: function (callback) {
        con.connect(this.connectionString);
        con.query('SELECT * FROM users', function (err, res) {
            if (err) throw err;
            callback({
                success: true,
                "message": "find all result",
                "userData": res
            });
        });
        con.end();
    },

    remove: function (name, callback) {
        con.connect(this.connectionString);
        con.query('DELETE FROM users WHERE name = ?', name, function (err, res) {
            if (err) throw err;
            callback({
                success: true,
                "message": 'User removed',
                "userData": res
            });
        });
        con.end();
    }

}

module.exports = mysqlConnection;