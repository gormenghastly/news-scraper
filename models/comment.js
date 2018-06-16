var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  obj_id: Number,
  title: String
});

var Comment = mongoose.model('Comments', CommentSchema);

module.exports = Comment;
