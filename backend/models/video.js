const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: false }, // Added category
  url: { type: String, required: true },
  thumbnail: { type: String, required: false },
});

module.exports = mongoose.model('Video', videoSchema);
