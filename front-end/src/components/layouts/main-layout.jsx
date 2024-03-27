import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
