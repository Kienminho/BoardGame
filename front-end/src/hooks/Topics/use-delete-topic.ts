import { useMutation } from "@tanstack/react-query";
import { topicApi } from "../../api/topic-api";

export const useDeleteTopic = () => {
  return useMutation({
    mutationFn: (topicId) => topicApi.deleteTopic(topicId),
  });
};
