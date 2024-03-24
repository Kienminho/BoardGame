const mongoose = require("../common/config_db");

const questionSchema = new mongoose.Schema({
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
