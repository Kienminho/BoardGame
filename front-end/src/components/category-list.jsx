import { useTopics } from "../hooks";
import CategoryItem from "./category-item";
import { List } from "antd";
import ContentLoading from "./content-loading";
import Error from "./error";

const defaultGrid = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 3,
  xxl: 3,
};

const CategoryList = () => {
  const { data: topic, isLoading, isError } = useTopics();
  if (isLoading) return <ContentLoading />;
  if (isError) return <Error />;
  const renderedItem = (topic) => (
    <List.Item>
      <CategoryItem key={topic._id} topic={topic} />
    </List.Item>
  );

  return (
    <List grid={defaultGrid} dataSource={topic} renderItem={renderedItem} />
  );
};

export default CategoryList;
