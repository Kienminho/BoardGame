import { Drawer, Tag, Button } from "antd";
import ProductCartList from "./product-cart-list";
import { useMobile } from "../hooks";

const CartTitle = () => {
  return (
    <div className="flex items-center gap-2">
      Giỏ hàng
      <Tag color="#f50" className="rounded-full">
        1
      </Tag>
    </div>
  );
};

const CartDrawer = ({ onClose, open }) => {
  const { isMobile } = useMobile();
  return (
    <Drawer
      width={isMobile ? "90%" : "50%"}
      title={<CartTitle />}
      onClose={onClose}
      open={open}
      styles={{ body: { padding: 0, height: "100%" } }}
    >
      <div className=" h-full flex flex-col">
        <div className="flex-1">
          <div className="h-full overflow-auto p-4">
            <ProductCartList />
          </div>
        </div>
        <div className="border-top border-gray-500 p-4 space-y-2">
          <div className="flex justify-between items-center text-xl font-semibold">
            <span>Thành tiền</span>
            2.245.000 VND
          </div>
          <a href="#" className="inline-block decoration-solid text-primary">
            Thêm ghi chú đơn hàng
          </a>
          <Button block size="large" type="primary">
            Thanh toán
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
