var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const noteItemSchema = require('../database/schema/note_item'); 
require('../database/connect_to_mongo')(); 
var NoteItem = mongoose.model('NoteItem', noteItemSchema);

/* GET users listing. */
router.post('/', function(req, res, next) {
  var obj = {content: req.body.content};
  var new_note = NoteItem(obj);
  new_note.save((err, obj) => {
    if (err) throw err;
    res.end();
  });
});

module.exports = router;
