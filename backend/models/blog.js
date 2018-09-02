const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  url: String,
  likes: { type: Number, default: 0 },
  comments: [String]
});

blogSchema.statics.format = ({
  title,
  _id: id,
  url,
  user,
  author,
  likes,
  comments
}) => ({
  title,
  id,
  url,
  user,
  author,
  likes,
  comments
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
