var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var get_notes = require('./routes/get_notes');
var add_note = require('./routes/add_note');
var delete_note = require('./routes/delete_note');

//// Set up a whitelist and check against it:
//var whitelist = ['http://localhost:4000']
//var cors_options = {
//  origin: function (origin, callback) {
//    if (whitelist.indexOf(origin) !== -1) {
//      callback(null, true)
//    } else {
//      callback(new Error('Not allowed by CORS'))
//    }
//  }
//}

var app = express();
//app.use(cors(cors_options));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/words/get_notes', get_notes);
app.use('/api/words/add_note', add_note);
app.use('/api/words/delete_note', delete_note);

module.exports = app;
