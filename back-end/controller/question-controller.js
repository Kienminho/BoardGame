const Utils = require("../common/utils");
const Question = require("../model/question");
const Topic = require("../model/topic");

const getAllQuestions = async (req, res) => {};

const getRandomQuestion = async (req, res) => {
  try {
    const { topicId } = req.params;
    if (!topicId) {
      return res
        .status(400)
        .json(Utils.createResponseModel(400, "TopicId is required"));
    }

    const randomQuestion = await Question.find({ topicId });
    const randomIndex = Math.floor(Math.random() * randomQuestion.length);

    return res.json(
      Utils.createSuccessResponseModel(randomQuestion[randomIndex])
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json(Utils.createResponseModel(500, error.message));
  }
};

const createQuestion = async (req, res) => {
  try {
    const { title, answer, topicId } = req.body;
    if (!title || !topicId) {
      return res
        .status(400)
        .json(
          Utils.createResponseModel(
            400,
            "Content, answer, options, topicId are required"
          )
        );
    }

    const topic = await Topic.findById(topicId);
    if (!topic)
      return res
        .status(404)
        .json(Utils.createResponseModel(404, "Topic not found"));

    const newQuestion = new Question({
      topicId,
      title,
      answer,
    });
    const result = await newQuestion.save();
    res.json(Utils.createSuccessResponseModel(result._id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { title, topicId, id } = req.body;
    if (!title || !topicId || !id) {
      return res
        .status(400)
        .json(
          Utils.createResponseModel(
            400,
            "Content, answer, options, topicId are required"
          )
        );
    }

    const topic = await Topic.findById(topicId);
    if (!topic)
      return res
        .status(404)
        .json(Utils.createResponseModel(404, "Topic not found"));

    const question = await Question.findById(id);
    if (!question)
      return res
        .status(404)
        .json(Utils.createResponseModel(404, "Question not found"));

    const updateQuestion = { ...question.toObject(), ...req.body };
    const result = await Question.updateOne({ _id: id }, updateQuestion);

    res.json(Utils.createSuccessResponseModel(result.modifiedCount > 0));
  } catch (error) {
    res.status(500).json(Utils.createResponseModel(500, error.message));
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json(Utils.createResponseModel(400, "Id is required"));
    }

    const question = await Question.findOneAndDelete({ _id: id });
    if (!question)
      return res
        .status(404)
        .json(Utils.createResponseModel(404, "Question not found"));

    res.json(Utils.createSuccessResponseModel(true));
  } catch (error) {
    res.status(500).json(Utils.createResponseModel(500, error.message));
  }
};

module.exports = {
  getAllQuestions,
  getRandomQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
