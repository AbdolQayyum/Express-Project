var mongoose = require("mongoose");

var languageSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  resource_type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  date_added: {
    type: Date,
    required: true
  },
  views_count: {
    type: Number,
    required: true
  },
  comments: [
    {
      user: {
        type: String,
        required: true
      },
      comment_text: {
        type: String,
        required: true
      }
    }
  ]
});

const LanguageModel = mongoose.model("codinglanguages",languageSchema);
module.exports = LanguageModel;
