import { ShoppingCart } from "lucide-react";
import { Badge, Button } from "antd";
import CartDrawer from "./cart-drawer";
import { useState } from "react";

const CartButton = () => {
  const [openCart, setOpenCart] = useState(false);

  const onOpenCart = () => {
    setOpenCart(true);
  };

  const onCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <div>
      <Button type="link" onClick={onOpenCart}>
        <Badge count={5}>
          <ShoppingCart color="white" />
        </Badge>
      </Button>

      <CartDrawer open={openCart} onClose={onCloseCart} />
    </div>
  );
};

export default CartButton;
