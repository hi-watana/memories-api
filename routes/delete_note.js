var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const noteItemSchema = require('../database/schema/note_item'); 
require('../database/connect_to_mongo')(); 
var NoteItem = mongoose.model('NoteItem', noteItemSchema);

/* GET users listing. */
router.post('/', function(req, res, next) {
    NoteItem.findByIdAndDelete(req.body._id, (err, users) => {
        if (err) return console.error(err);
        res.json({});
    });
});

module.exports = router;
