import { ProductList, Slide } from "../components";

const HomePage = () => {
  return (
    <main>
      <Slide />
      <div className="container mx-auto px-4 md:px-0 my-10">
        <ProductList />
      </div>
    </main>
  );
};

export default HomePage;
