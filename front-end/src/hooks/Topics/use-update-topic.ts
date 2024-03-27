import { useMutation } from "@tanstack/react-query";
import { topicApi } from "../../api/topic-api";

export const useUpdateTopic = () => {
  return useMutation({
    mutationFn: (body) => topicApi.updateTopic(body),
  });
};
