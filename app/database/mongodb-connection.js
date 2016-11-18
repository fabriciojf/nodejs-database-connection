// default settings
var config = require('../config/default-config');
var user = require('../model/user-model');

// connection prototype
function MongoConnection() {
    this.mongoose = require('mongoose');
    this.mongoose.connect(config.mongodb.host);
}
MongoConnection.Mrototype = {

    create: function (name, email, password, callback) {
        var me = new user({
            name: name,
            email: email,
            password: password,
        });

        me.save(function (err, me) {
            if (err) throw err;
            callback({
                success: true,
                "message": "User created",
                "userData": me
            });
        });
    },

    findByName: function (name, callback) {
        user.findOne({
            name: name
        }, function (err, user) {
            if (err) throw err;
            if (!user) {
                callback({
                    success: false,
                    message: 'User not found'
                });
            }
            callback(user);
        });
    },

    findAll: function (callback) {
        user.find({}, function (err, user) {
            if (err) throw err;
            if (!user) {
                callback({
                    success: false,
                    message: 'User not found'
                });
            }
            callback(user);
        });
    },

    remove: function (name, callback) {
        user.remove({name: name}, function(err, result) {
            if (err) throw err;
            callback({
                success: true,
                message: 'User removed'
            })
        })
    }

}

module.exports = MongoConnection;