import { useMutation } from "@tanstack/react-query";
import { questionApi } from "../../api/question-api";

export const useDeleteQuestion = () => {
  return useMutation({
    mutationFn: (questionId) => questionApi.deleteQuestion(questionId),
  });
};
