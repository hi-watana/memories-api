
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const noteItemSchema = require('../database/schema/note_item'); 
require('../database/connect_to_mongo')(); 
var NoteItem = mongoose.model('NoteItem', noteItemSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
    NoteItem.estimatedDocumentCount((err, data_size) => {
        const frame_size = parseInt(req.query.frame_size);
        const size = (frame_size < data_size) ? frame_size : data_size;
        NoteItem.aggregate([{$sample: {size: size}}], (err, items) => {
            if (err) return console.error(err);
            res.json(items);
        });
    });
});

module.exports = router;
