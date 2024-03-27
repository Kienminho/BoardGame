import axiosClient from "./axios-client";

export const questionApi = {
  getQuestions() {
    return axiosClient.get("/question/get-list-question");
  },
  getQuestionsByTopic(topicId) {
    return axiosClient.get(`/topic/get-questions-by-topic/${topicId}`);
  },
  createQuestion(body) {
    //   {
    //     "title": "<h3>Trước năm 1975, Đà Nẵng từng chỉ có 3 quận, vậy bạn có biết quận 1 hiện tại bây giờ tên gì không?</h3>",
    //     "topicId": "65ffe033c148e4fe03142af7",
    //     //"answer": "<ul><li>Cầu Sông Hàn</li><li>Cầu Rồng</li><li>Cầu Trần Thị Lý</li><li>Suối Khoáng Nóng Thần Tài</li><li>StarBucks</li><li>Cà Phê Long</li></ul>"
    //     "answer": "<ul><li>Hải Châu</li></ul>"
    // }
    return axiosClient.post(`/question/create-question`, body);
  },
  getRandomQuestion(topicId) {
    return axiosClient.get(`question/get-random-question/${topicId}`);
  },
  deleteQuestion(questionId) {
    return axiosClient.delete(`/question/delete-question/${questionId}`);
  },
  updateQuestion(body) {
    return axiosClient.put(`/question/update-question`, body);
  },
};
