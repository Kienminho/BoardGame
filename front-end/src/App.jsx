import Providers from "./providers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/main-layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ArticlesPage from "./pages/articles-page";
import CartPage from "./pages/cart-page";
import MiniGamePage from "./pages/mini-game-page";
import ProductDetailPage from "./pages/product-detail-page";
import ProductListPage from "./pages/product-list-page";
import AdminLoginPage from "./pages/admin/admin-login-page";
import CategoriesPage from "./pages/admin/categories";
import QuestionsPage from "./pages/admin/questions";
import { AdminLayout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="game-storage" element={<MiniGamePage />} />
            <Route path="products" element={<ProductListPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="login" element={<AdminLoginPage />} />
            <Route path="topics" element={<CategoriesPage />} />
            <Route path="questions" element={<QuestionsPage />} />
          </Route>
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
