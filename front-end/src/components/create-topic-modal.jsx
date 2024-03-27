import { Modal, Form, Input, App, ColorPicker } from "antd";
import { useCreateTopic, useUpdateTopic } from "../hooks";
import { useQueryClient } from "@tanstack/react-query";

const CreateTopicModal = ({ topic = {}, open, onClose }) => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();
  const { mutate: createTopic, isPending: createTopicLoading } =
    useCreateTopic();
  const { mutate: updateTopic, isPending: updateTopicLoading } =
    useUpdateTopic();

  const isEditSession = topic?._id;

  const onCreateTopic = (values) => {
    if (isEditSession) {
      updateTopic(
        { id: topic._id, ...values },
        {
          onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["topics"] });
            message.success("Cập nhật chủ đề thành công");
            onClose();
          },
          onError() {
            message.error("Cập nhật chủ đề thất bại");
          },
        }
      );
    } else {
      createTopic(values, {
        onSuccess() {
          queryClient.invalidateQueries({ queryKey: ["topics"] });
          message.success("Tạo chủ đề thành công");
          onClose();
        },
        onError() {
          message.error("Tạo chủ đề thất bại");
        },
      });
    }
  };
  const isLoading = createTopicLoading || updateTopicLoading;
  return (
    <Modal
      destroyOnClose
      title={isEditSession ? "Chỉnh sửa chủ đề" : "Tạo chủ đề"}
      open={open}
      onCancel={onClose}
      okButtonProps={{
        form: "create-question",
        htmlType: "submit",
        disabled: isLoading,
      }}
      cancelButtonProps={{ disabled: isLoading }}
    >
      <Form
        id="create-question"
        name="create-question"
        layout="vertical"
        disabled={isLoading}
        onFinish={onCreateTopic}
        initialValues={topic}
      >
        <Form.Item
          label="Tên chủ đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tên chủ đề" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Màu sắc "
          name="color"
          getValueFromEvent={(_, hex) => hex}
          rules={[{ required: true, message: "Vui lòng chọn màu sắc" }]}
        >
          <ColorPicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTopicModal;
