import axiosClient from "./axios-client";

export const topicApi = {
  getTopics() {
    return axiosClient.get(`/topic/get-list-topic`);
  },
  createTopic(body) {
    return axiosClient.post(`/topic/create-topic`, body);
  },
  updateTopic(body) {
    // {
    //   "id":"65ffdfb28e0fb75fe1160657",
    //     "title": "Topic update",
    //     "color": "#444444"
    // }
    return axiosClient.put(`/topic/update-topic`, body);
  },
  deleteTopic(topicId) {
    return axiosClient.delete(`/topic/delete-topic/${topicId}`);
  },
};
