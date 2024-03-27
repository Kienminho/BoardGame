import { Button } from "antd";
import CreateTopicModal from "./create-topic-modal";
import { useState } from "react";

const CreateCategoryButton = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={onOpen}>
        Thêm chủ đề
      </Button>
      <CreateTopicModal open={open} onClose={onClose} />
    </div>
  );
};

export default CreateCategoryButton;
