import { Link } from "react-router-dom";
import { Button } from "antd";

export default function ProductItem() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden dark:border-gray-800">
      <div className="relative aspect-[1/1] flex items-center justify-center">
        <Link className="absolute inset-0 z-10" href="#" />
        <img
          alt="Thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          height={300}
          src="/images/product-image.png"
          width={300}
        />
      </div>
      <div className="grid gap-1 p-4">
        <Link
          className="font-semibold !text-black text-xl line-clamp-1 hover:underline-gray-900 dark:hover:underline-gray-50"
          href="#"
        >
          Petits Chevaux
        </Link>
        <div className="font-semibold text-base">$99</div>
        <Button size="large" type="primary">
          Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
}
