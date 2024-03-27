import ArticleItem from "./article-item";
import { List } from "antd";

const productList = [
  {
    id: "1",
    name: "Product 1",
  },
  {
    id: "2",
    name: "Product 2",
  },
  {
    id: "3",
    name: "Product 3",
  },
  {
    id: "4",
    name: "Product 4",
  },
  {
    id: "5",
    name: "Product 5",
  },
  {
    id: "6",
    name: "Product 6",
  },
];

const defaultGrid = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 3,
  xxl: 3,
};

const ArticleList = ({ products = productList, ...restProps }) => {
  const renderedItem = (product) => (
    <List.Item>
      <ArticleItem key={product.id} product={product} />
    </List.Item>
  );

  return (
    <List
      {...restProps}
      grid={defaultGrid}
      dataSource={products}
      renderItem={renderedItem}
    />
  );
};

export default ArticleList;
