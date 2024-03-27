import { Table, Typography, Popconfirm, App } from "antd";
import CreateQuestionModal from "./create-question-modal";
import { useState } from "react";
import { useDeleteQuestion } from "../hooks/Questions";
import { useQueryClient } from "@tanstack/react-query";

const QuestionAction = ({ question }) => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [openEditModal, setOpenEditModal] = useState(false);
  const { mutate } = useDeleteQuestion();

  const onDelete = () => {
    mutate(question._id, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["questions"] });
        message.success("Xóa câu hỏi thành công");
      },
      onError() {
        message.success("Xóa câu hỏi thất bại");
      },
    });
  };

  const onOpen = () => {
    setOpenEditModal(true);
  };
  const onClose = () => {
    setOpenEditModal(false);
  };
  return (
    <span>
      <Typography.Link onClick={onOpen} style={{ marginRight: 8 }}>
        Edit
      </Typography.Link>
      <Popconfirm title="Sure to cancel?" onConfirm={onDelete}>
        <a>Delete</a>
      </Popconfirm>

      <CreateQuestionModal
        question={question}
        open={openEditModal}
        onClose={onClose}
      />
    </span>
  );
};

const QuestionsTable = ({ questions = [] }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      width: 150,
      render(_, record) {
        return <QuestionAction question={record} />;
      },
    },
  ];
  return <Table rowKey="_id" dataSource={questions} columns={columns} />;
};

export default QuestionsTable;
