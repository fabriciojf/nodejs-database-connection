var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const USER = {
    id: Number,
    name: String, 
    username: String,
    email: String,
    created: Date,
    password: { type: String, select: false }
}

// user mongodb model
module.exports = mongoose.model('User', new Schema(USER));