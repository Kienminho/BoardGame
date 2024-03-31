import ProductCartItem from "./product-cart-item";

const cartProducts = [
  {
    id: "1",
    label: "Product 1",
  },
];

const ProductCartList = ({ products = cartProducts }) => {
  const renderedProducts = products.map((product) => {
    return <ProductCartItem key={product.id} product={product} />;
  });

  return <div className="flex flex-col gap-4">{renderedProducts}</div>;
};

export default ProductCartList;
