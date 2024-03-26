const Utils = require("../common/utils");
const Topic = require("../model/topic");

const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ isDeleted: false });
    res.json(Utils.createSuccessResponseModel(topics, topics.length));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllQuestionsByTopic = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json(Utils.createResponseModel(400, "Id is required"));
    }
    //find all questions by topicId
    const questions = await Question.findMany({ topicId: id });
    res.json(Utils.createSuccessResponseModel(questions, questions.length));
  } catch (error) {
    console.log("TopicController -> getAllQuestionsByTopic -> error", error);
    res.status(500).json(Utils.createResponseModel(500, error.message));
  }
};

const createTopic = async (req, res) => {
  try {
    const { title, color } = req.body;
    if (!title || !color) {
      return res
        .status(400)
        .json(Utils.createResponseModel(400, "Title and color are required"));
    }

    const newTopic = new Topic({
      title,
      color,
    });
    const result = await newTopic.save();
    res.json(Utils.createSuccessResponseModel(result._id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTopic = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res
        .status(400)
        .json(Utils.createResponseModel(400, "Id is required"));
    }
    const topic = await Topic.findById(id);
    if (!topic)
      return res
        .status(404)
        .json(Utils.createResponseModel(404, "Topic not found"));
    const newTopic = { ...topic.toObject(), ...req.body };
    const result = await Topic.updateOne({ _id: id }, newTopic);
    return res.json(Utils.createSuccessResponseModel(result.modifiedCount > 0));
  } catch (error) {
    console.log("TopicController -> updateTopic -> error", error);
    res.status(500).json(Utils.createResponseModel(500, error.message));
  }
};

const deleteTopic = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json(Utils.createResponseModel(400, "Id is required"));
    }
    const topic = await Topic.findById(id);
    if (!topic)
      return res
        .status(404)
        .json(Utils.createResponseModel(404, "Topic not found"));
    topic.isDeleted = true;
    await topic.save();
    return res.json(Utils.createSuccessResponseModel(true));
  } catch (error) {
    console.log("TopicController -> deleteTopic -> error", error);
    res.status(500).json(Utils.createResponseModel(500, error.message));
  }
};

module.exports = {
  getAllTopics,
  getAllQuestionsByTopic,
  createTopic,
  updateTopic,
  deleteTopic,
};
