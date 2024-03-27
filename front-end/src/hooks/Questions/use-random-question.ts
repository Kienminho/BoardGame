import { useQuery } from "@tanstack/react-query";
import { questionApi } from "../../api/question-api";

export const useRandomQuestion = (topicId) => {
  return useQuery({
    queryKey: ["questions", { topicId }],
    queryFn: () => questionApi.getRandomQuestion(topicId),
  });
};
