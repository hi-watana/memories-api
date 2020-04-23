var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const noteItemSchema = require('../database/schema/note_item'); 
require('../database/connect_to_mongo')(); 
var NoteItem = mongoose.model('NoteItem', noteItemSchema);

/* GET users listing. */
// TODO: Implement using DELETE request.
router.delete('/', function(req, res, next) {
  NoteItem.findByIdAndDelete(req.query._id, (err, users) => {
    if (err) return console.error(err);
    res.end();
  });
});

module.exports = router;
