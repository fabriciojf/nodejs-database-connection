// default settings
var config = require('../config/default-config');

// imports
var mysql = require('mysql');

// connection prototype
function MysqlConnection() {
    this.con = mysql.createConnection({
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.pass,
        database: config.mysql.database
    })
}

MysqlConnection.prototype = {

    create: function (userJson, callback) {
        this.con.connect();
        this.con.query('INSERT INTO users SET ?', userJson, function (err, res) {
            if (err) throw err;            
            callback({
                success: true,
                "message": "User created",
                "userData": res
            });
        });
        this.con.end();
    },

    findByName: function (name, callback) {
        this.con.connect();
        this.con.query('SELECT * FROM users WHERE name = ?', name, function (err, res) {
            if (err) throw err;            
            callback({
                success: true,
                "message": "find by name result",
                "userData": res
            });
        });
        this.con.end();
    },

    findAll: function (callback) {
        this.con.connect();
        this.con.query('SELECT * FROM users', function (err, res) {
            if (err) throw err;            
            callback({
                success: true,
                "message": "find all result",
                "userData": res
            });
        });
        this.con.end();
    },

    remove: function (name, callback) {
        this.con.connect();
        this.con.query('DELETE FROM users WHERE name = ?', name, function (err, res) {
            if (err) throw err;            
            callback({
                success: true,
                "message": 'User removed',
                "userData": res
            });
        });
        this.con.end();
    }

}

module.exports = MysqlConnection;