const express = require("express");
const router = express.Router();
const topicController = require("../controller/topic-controller");

router.get("/get-list-topic", topicController.getAllTopics);
router.get(
  "/get-questions-by-topic/:id",
  topicController.getAllQuestionsByTopic
);
router.post("/create-topic", topicController.createTopic);
router.put("/update-topic", topicController.updateTopic);
router.delete("/delete-topic/:id", topicController.deleteTopic);

module.exports = router;
