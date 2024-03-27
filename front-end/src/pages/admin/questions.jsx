import {
  ContentLoading,
  CreateQuestionButton,
  Error,
  QuestionsTable,
} from "../../components";
import { useQuestions } from "../../hooks/Questions";

const QuestionsPage = () => {
  const { data: questions, isLoading, isError } = useQuestions();

  if (isLoading) return <ContentLoading />;
  if (isError) return <Error />;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-semibold">Danh sách câu hỏi</h1>
        <CreateQuestionButton />
      </div>
      <QuestionsTable questions={questions} />
    </div>
  );
};

export default QuestionsPage;
