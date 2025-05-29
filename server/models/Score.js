// models/Score.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  wpm: { type: Number, required: true },
  accuracy: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
