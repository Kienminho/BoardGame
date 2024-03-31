import { Input } from "antd";

const ProductCartItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <img
          height={80}
          width={80}
          src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoZXNzfGVufDB8fDB8fHww"
          alt="Chess"
        />
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-lg">Torane</p>
          <div className="text-gray-400">2.245.000 VND</div>
        </div>
      </div>
      <div className="flex flex-col">
        <Input style={{ width: 45, textAlign: "center" }} value={5} />
        <a>Remove</a>
      </div>
    </div>
  );
};

export default ProductCartItem;
