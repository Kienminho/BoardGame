import { useQuery } from "@tanstack/react-query";
import { questionApi } from "../../api/question-api";

export const useQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: () => questionApi.getQuestions(),
  });
};
