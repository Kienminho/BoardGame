const mongoose = require("../common/config_db");

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    required: false,
  },
});

const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic;
