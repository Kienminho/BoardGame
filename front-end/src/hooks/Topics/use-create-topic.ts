import { useMutation } from "@tanstack/react-query";
import { topicApi } from "../../api/topic-api";

export const useCreateTopic = () => {
  return useMutation({
    mutationFn: (body) => topicApi.createTopic(body),
  });
};
