var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    }
}, { collection: 'post', timestamps: true });

module.exports = mongoose.model('post', postSchema);