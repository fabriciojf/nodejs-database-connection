// default settings
var config = require('../config/default-config');

// imports
var mysql = require('mysql');

// connection prototype
function MysqlConnection() {
    this.con = mysql.createConnection(config.mysql.settings);
}

MysqlConnection.prototype = {

    create: function (userJson, callback) {
        this.con.connect();
        this.con.query('INSERT INTO users SET ?', userJson, function (err, res) {
            if (err) throw err;            
            callback({
                success: true,
                userData: res
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
                userData: res
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
                userData: res
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
                userData: res
            });
        });
        this.con.end();
    }

}

module.exports = MysqlConnection;