import { Table, Typography, Popconfirm, App } from "antd";
import CreateCategoryButton from "./create-category-button";
import { useState } from "react";
import CreateTopicModal from "./create-topic-modal";
import { useDeleteTopic } from "../hooks";
import { useQueryClient } from "@tanstack/react-query";

const TopicAction = ({ topic }) => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [openTopicModal, setOpenTopicModal] = useState(false);
  const { mutate: deleteTopic } = useDeleteTopic();

  const onOpen = () => {
    setOpenTopicModal(true);
  };
  const onClose = () => {
    setOpenTopicModal(false);
  };

  const onDelete = () => {
    deleteTopic(topic._id, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["topics"] });
        message.success("Xóa chủ đề thành công");
      },
      onError() {
        message.error("Xóa chủ đề thất bại");
      },
    });
  };
  return (
    <span>
      <Typography.Link onClick={onOpen} style={{ marginRight: 8 }}>
        Edit
      </Typography.Link>
      <Popconfirm title="Bạn chắc chắn muốn xóa?" onConfirm={onDelete}>
        <a>Delete</a>
      </Popconfirm>
      <CreateTopicModal topic={topic} open={openTopicModal} onClose={onClose} />
    </span>
  );
};

const CategoriesTable = ({ topics = [] }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hex color",
      dataIndex: "color",
      key: "color",
      render: (value) => {
        return (
          <div className="flex items-center gap-2 ">
            <span>{value}</span>
            <div style={{ background: value }} className={`w-6 h-6 rounded`} />
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render(_, record) {
        return <TopicAction topic={record} />;
      },
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Danh sách chủ đề</h1>
        <CreateCategoryButton />
      </div>
      <Table rowKey="_id" dataSource={topics} columns={columns} />
    </div>
  );
};

export default CategoriesTable;
