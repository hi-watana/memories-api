var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var accessControl = require('./middleware'); // Remove this line

var noteController = require('./routes/noteController');
var authController = require('./routes/authController'); // Add this line
var authenticateToken = require('./jwtMiddleware'); // Add this line

var app = express();
//app.use(cors(cors_options));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(accessControl); // Remove this line
app.use('/auth', authController); // Add this line for authentication routes
app.use('/notes', authenticateToken); // Add this line to protect /notes routes

app.use('/notes', noteController);
//app.use('/notes', add_note);
//app.use('/notes', delete_note);

module.exports = app;
