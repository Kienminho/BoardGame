import { Modal, Form, Input, App } from "antd";
import { useCreateQuestion, useUpdateQuestion } from "../hooks/Questions";
import { useQueryClient } from "@tanstack/react-query";
import TopicSelect from "./topic-select";
import Editor from "./editor";

const CreateQuestionModal = ({ question = {}, open, onClose }) => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();
  const { mutate: createQuestion, isPending: createQuestionPending } =
    useCreateQuestion();
  const { mutate: updateQuestion, isPending: updateQuestionPending } =
    useUpdateQuestion();

  const isEditSession = question?._id;

  const onCreateQuestion = (values) => {
    if (isEditSession) {
      updateQuestion(
        { id: question._id, ...values },
        {
          onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["questions"] });
            onClose();
            message.success("Cập nhật câu hỏi thành công");
          },
          onError() {
            message.error("Cập nhật câu hỏi thất bại");
          },
        }
      );
    } else {
      createQuestion(values, {
        onSuccess() {
          queryClient.invalidateQueries({ queryKey: ["questions"] });
          onClose();
          message.success("Tạo câu hỏi thành công");
        },
        onError() {
          message.error("Tạo câu hỏi thất bại");
        },
      });
    }
  };
  const isLoading = createQuestionPending || updateQuestionPending;
  return (
    <Modal
      destroyOnClose
      title="Tạo câu hỏi"
      open={open}
      onCancel={onClose}
      okButtonProps={{
        form: "create-question",
        htmlType: "submit",
        disabled: isLoading,
      }}
      width="80%"
      cancelButtonProps={{ disabled: isLoading }}
    >
      <Form
        id="create-question"
        name="create-question"
        layout="vertical"
        disabled={isLoading}
        onFinish={onCreateQuestion}
        initialValues={question}
      >
        <Form.Item
          label="Chủ đề "
          name="topicId"
          rules={[{ required: true, message: "Vui lòng chọn chủ đề " }]}
        >
          <TopicSelect />
        </Form.Item>
        <Form.Item
          label="Nội dung câu hỏi"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập câu hỏi" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Đáp án"
          name="answer"
          rules={[{ required: true, message: "Vui lòng nhập đáp án" }]}
        >
          <Editor />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateQuestionModal;
