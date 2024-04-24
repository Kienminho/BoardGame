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

const articleList = [
  {
    id: "1",
    author: "Tony",
    content: "Xu hướng chơi boardgame hiện nay.",
    imageUrl: "/images/image_1.png",
  },
  {
    id: "2",
    content: "Tourane - Đà nẵng du lịch qua bàn cờ.",
    author: "Nguyễn Thị Bích Vân",
    imageUrl: "/images/image_2.png",
  },
  {
    id: "3",
    content:
      "Board Game và Giáo Dục: Sự Ảnh Hưởng Đối Với Phát Triển Trí Tuệ và Kỹ Năng Xã Hội.",
    author: "Nguyễn Gia Bảo Ngọc",
    imageUrl: "/images/image_3.png",
  },
  {
    id: "4",
    content:
      "Nghệ Thuật Thiết Kế Board Game: Các Yếu Tố Quan Trọng và Câu Chuyện Đằng Sau.",
    author: "Nguyễn Hữu Gia Tường",
    imageUrl: "/images/image_4.png",
  },
  {
    id: "5",
    content:
      "Cẩm Nang Cho Người Mới Bắt Đầu: Làm Thế Nào Để Bắt Đầu Với Board Game.",
    author: "Hoàng Thuý Quỳnh",
    imageUrl: "/images/image_5.png",
  },
  {
    id: "6",
    content: "Board Game: Sự Kết Hợp Giữa Nghệ Thuật, Chiến Lược và Giải Trí.",
    author: "Lê Quốc Khánh",
    imageUrl: "/images/image_6.png",
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

const ArticleList = ({ articles = articleList, ...restProps }) => {
  const renderedItem = (article) => (
    <List.Item>
      <ArticleItem
        key={article.id}
        author={article.author}
        content={article.content}
        imageUrl={article.imageUrl}
      />
    </List.Item>
  );

  return (
    <List
      {...restProps}
      grid={defaultGrid}
      dataSource={articles}
      renderItem={renderedItem}
    />
  );
};

export default ArticleList;
