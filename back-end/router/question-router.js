const express = require("express");
const router = express.Router();
const questionController = require("../controller/question-controller");

router.get("/get-list-question", questionController.getAllQuestions);
//random one question for topic
router.get(
  "/get-random-question/:topicId",
  questionController.getRandomQuestion
);
router.post("/create-question", questionController.createQuestion);
router.put("/update-question", questionController.updateQuestion);
router.delete("/delete-question/:id", questionController.deleteQuestion);

module.exports = router;
