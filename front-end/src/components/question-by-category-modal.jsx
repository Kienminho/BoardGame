import { Modal, Card, Button } from "antd";
import { useMobile, useQuestionsByTopic, useRandomQuestion } from "../hooks";
import { useState } from "react";
import ContentLoading from "./content-loading";
import Error from "./error";

const Question = ({ topicId, onClose }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { data: question, isLoading, isError } = useRandomQuestion(topicId);
  const {
    data: questions = [],
    isQuestionsLoading,
    isQuestionsError,
  } = useQuestionsByTopic(topicId);
  if (isLoading || isQuestionsLoading) return <ContentLoading />;
  if (isError || isQuestionsError) return <Error />;

  if (questions.length === 0) return <div>Chủ đề không có câu hỏi nào</div>;
  return (
    <div className="flex flex-col gap-4">
      <Card title={question.title} bordered={false}>
        {showAnswer && (
          <div dangerouslySetInnerHTML={{ __html: question.answer }} />
        )}
      </Card>
      <div className="flex justify-end gap-2">
        <Button onClick={onClose}>Đóng</Button>
        <Button type="primary" onClick={() => setShowAnswer(true)}>
          Đáp án
        </Button>
      </div>
    </div>
  );
};

const QuestionByCategoryModal = ({ open, onCancel, topic }) => {
  const { isMobile } = useMobile();
  return (
    <Modal
      destroyOnClose
      title={`Chủ đề: ${topic.title}`}
      footer={null}
      width={isMobile ? "90%" : "50%"}
      open={open}
      onCancel={onCancel}
    >
      <Question topicId={topic._id} onClose={onCancel} />
    </Modal>
  );
};

export default QuestionByCategoryModal;
