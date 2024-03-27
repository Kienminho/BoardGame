import { useMutation } from "@tanstack/react-query";
import { questionApi } from "../../api/question-api";

export const useUpdateQuestion = () => {
  return useMutation({
    mutationFn: (body) => questionApi.updateQuestion(body),
  });
};
