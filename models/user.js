var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    }
}, { collection: 'user', timestamps: true });

module.exports = mongoose.model('user', userSchema);