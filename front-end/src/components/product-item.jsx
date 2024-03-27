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
          src="https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fHww"
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
