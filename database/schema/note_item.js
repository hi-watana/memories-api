var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const noteItemSchema = new Schema({
    content: String,
    date: { type: Date, default: Date.now }
});

module.exports = noteItemSchema;
