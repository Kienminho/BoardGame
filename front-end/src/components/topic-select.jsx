import { Select } from "antd";
import { useTopics } from "../hooks/Topics/use-topics";

const TopicSelect = (props) => {
  const { data: topics = [], isLoading } = useTopics();
  const topicOptions = topics.map((topic) => ({
    label: topic.title,
    value: topic._id,
  }));
  return <Select {...props} loading={isLoading} options={topicOptions} />;
};

export default TopicSelect;
