
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

router.post('/', async function(req, res, next) {
  try {
    var obj = {content: req.body.content};
    var new_note = NoteItem(obj);
    const saved_note = await new_note.save();
    res.json(saved_note);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    await NoteItem.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
