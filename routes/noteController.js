
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const noteItemSchema = require('../database/schema/note_item'); 
require('../database/connect_to_mongo')(); 
var NoteItem = mongoose.model('NoteItem', noteItemSchema);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const data_size = await NoteItem.estimatedDocumentCount();
    const frame_size = parseInt(req.query.frame_size);
    const size = (frame_size < data_size) ? frame_size : data_size;
    const items = await NoteItem.aggregate([{$sample: {size: size}}]);
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.post('/', function(req, res, next) {
  var obj = {content: req.body.content};
  var new_note = NoteItem(obj);
  new_note.save((err, obj) => {
    if (err) throw err;
    res.end();
  });
});

router.delete('/:id', function(req, res, next) {
  console.log(req.param.id)
  NoteItem.findByIdAndDelete(req.params.id, (err, users) => {
    if (err) return console.error(err);
    res.end();
  });
});

module.exports = router;
