var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var accessControl = require('./middleware');

var noteController = require('./routes/noteController');

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
app.use(cookieParser());

app.use(accessControl);

app.use('/notes', noteController);
//app.use('/notes', add_note);
//app.use('/notes', delete_note);

module.exports = app;
