import { useQuery } from "@tanstack/react-query";
import { questionApi } from "../../api/question-api";

export const useQuestionsByTopic = (topicId) => {
  return useQuery({
    queryKey: ["questions", "byTopic", { topicId }],
    queryFn: () => questionApi.getQuestionsByTopic(topicId),
    enabled: Boolean(topicId),
  });
};
