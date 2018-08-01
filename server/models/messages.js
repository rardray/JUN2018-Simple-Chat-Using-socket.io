var mongoose = require('mongoose');

var schema = mongoose.Schema({
    //_id: String,
    author: String,
    message: String
})

Messages = mongoose.model('Messages', schema)

module.exports = Messages
