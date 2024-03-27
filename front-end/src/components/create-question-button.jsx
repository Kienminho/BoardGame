import { Button } from "antd";
import { useState } from "react";
import CreateQuestionModal from "./create-question-modal";

const CreateQuestionButton = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const onOpen = () => {
    setOpenCreateModal(true);
  };
  const onClose = () => {
    setOpenCreateModal(false);
  };

  return (
    <div>
      <Button type="primary" onClick={onOpen}>
        Tạo câu hỏi
      </Button>
      <CreateQuestionModal open={openCreateModal} onClose={onClose} />
    </div>
  );
};

export default CreateQuestionButton;
