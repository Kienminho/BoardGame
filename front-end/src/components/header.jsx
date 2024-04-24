import LanguageSelect from "./language-select";
import CartButton from "./cart-button";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 z-10  bg-background-footer px-0"
    >
      <Navbar.Brand
        as={Link}
        href="https://flowbite-react.com"
        className="ml-2"
      >
        <Link to="/" className="!text-primary text-3xl font-bold">
          Tourane Game
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="bg-background-footer">
        <Navbar.Link as={Link} to="/products" className="!text-primary text-lg">
          Sản phẩm
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about-us" className="!text-primary text-lg">
          Giới thiệu
        </Navbar.Link>
        <Navbar.Link as={Link} to="/articles" className="!text-primary text-lg">
          Bài viết
        </Navbar.Link>
        {/* <Navbar.Link
          as={Link}
          to="game-storage"
          className="!text-primary text-lg"
        >
          Game Storage
        </Navbar.Link> */}
        <Navbar.Brand
          active
          className="flex items-center gap-2 mt-2 ml-4 md:mt-0 md:ml-0"
        >
          <LanguageSelect />
          <CartButton />
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
