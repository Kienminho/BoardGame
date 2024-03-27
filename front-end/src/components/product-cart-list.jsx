import ProductCartItem from "./product-cart-item";

const cartProducts = [
  {
    id: "1",
    label: "Product 1",
  },
  {
    id: "2",
    label: "Product 2",
  },
  {
    id: "3",
    label: "Product 3",
  },
  {
    id: "4",
    label: "Product 4",
  },
];

const ProductCartList = ({ products = cartProducts }) => {
  const renderedProducts = products.map((product) => {
    return <ProductCartItem key={product.id} product={product} />;
  });

  return <div className="flex flex-col gap-4">{renderedProducts}</div>;
};

export default ProductCartList;
