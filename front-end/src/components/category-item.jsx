import { Link } from "react-router-dom";
import QuestionByCategoryModal from "./question-by-category-modal";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function CategoryItem({ topic }) {
  const queryClient = useQueryClient();
  const [openQuestion, setOpenQuestion] = useState(false);

  const onOpenQuestion = () => {
    setOpenQuestion(true);
  };

  const onCloseQuestion = () => {
    queryClient.removeQueries({
      queryKey: ["questions", { topicId: topic._id }],
    });
    setOpenQuestion(false);
  };

  return (
    <>
      <div
        className="flex flex-col rounded-lg border border-gray-200 overflow-hidden dark:border-gray-800 max-h-[150px]"
        onClick={onOpenQuestion}
        style={{
          backgroundImage: `url(${topic.color})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="relative aspect-[1/1] flex items-center justify-center">
          <Link className="absolute inset-0 z-10" href="#" />
        </div>
        <div className="grid gap-1 p-4 text-3xl text-white">{topic.title}</div>
      </div>
      <QuestionByCategoryModal
        open={openQuestion}
        onCancel={onCloseQuestion}
        topic={topic}
      />
    </>
  );
}
