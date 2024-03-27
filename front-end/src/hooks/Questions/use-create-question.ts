import { useMutation } from "@tanstack/react-query";
import { questionApi } from "../../api/question-api";

export const useCreateQuestion = () => {
  return useMutation({
    mutationFn: (body) => questionApi.createQuestion(body),
  });
};
