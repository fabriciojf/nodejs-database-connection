// default settings
var config = require('../config/default-config');
var user = require('../model/user-model');

// connection prototype
function MongoConnection() {
    this.mongoose = require('mongoose');
    this.mongoose.connect(config.mongodb.connectionString);
}
MongoConnection.prototype = {

    create: function (userData, callback) {
        var me = new user(userData);
        me.save(function (err, me) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }

            return callback({
                success: true,
                userData: me
            });
        });
        this.mongoose.connection.close();
    },

    findByName: function (name, callback) {
        user.findOne({name: name}, findCb);
        
        function findCb (err, user) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }
            if (!user) {
                return callback({
                    success: false,
                    message: 'User not found'
                });
            }
            return callback(user);
        };
        this.mongoose.connection.close();
    },

    findAll: function (callback) {
        user.find({}, function (err, user) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }
            if (!user) {
                return callback({
                    success: false,
                    message: 'User not found'
                });
            }
            return callback(user);
        });
        this.mongoose.connection.close();
    },

    remove: function (name, callback) {
        user.remove({name: name}, function(err, result) {
            if (err) {
                return callback({
                    success: false,
                    error: err
                });
            }
            return callback({
                success: true,
                message: 'User removed'
            })
        });
        this.mongoose.connection.close();
    }
}

module.exports = MongoConnection;