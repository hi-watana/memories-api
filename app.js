var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var get_notes = require('./routes/get_notes');
var add_note = require('./routes/add_note');
var delete_note = require('./routes/delete_note');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/words/get_notes', get_notes);
app.use('/api/words/add_note', add_note);
app.use('/api/words/delete_note', delete_note);

module.exports = app;
