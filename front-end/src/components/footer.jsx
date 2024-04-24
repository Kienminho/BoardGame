import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background-footer">
      <div className="container mx-auto px-2 pt-10 pb-4 flex flex-col md:flex-row gap-10 md:gap-10">
        <div className="min-w-[100px] md:max-w-[400px] space-y-4 text-primary">
          <h3 className="text-2xl  font-semibold">Đăng ký</h3>
          <p>Nhận ngay mã giảm giá 10% cho đơn đặt hàng đầu tiên</p>
          <input
            className="bg-background-footer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-4 ring-1 ring-slate-200 shadow-sm"
            type="text"
          />
          <p className="font-semibold text-secondary">
            Công ty TNHH Legacy Tales
          </p>
          <p>
            <span className="font-semibold">Địa chỉ:</span> 360 Hùng Vương, Vĩnh
            Trung, Thanh Khê, TP Đà Nẵng
          </p>
          <p>
            <span className="font-semibold">Contact: </span> +84905902784
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            legacytales.co@gmail.com
          </p>
        </div>
        <div className="flex justify-between flex-1 text-primary">
          <div className="flex flex-col  gap-2">
            <p className="text-base font-bold mb-2">Về chúng tôi</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#" className="!text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Cách chơi
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Cam kết
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Press
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-base font-bold mb-2">Theo dõi</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#" className="!text-primary">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Linked in
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-base font-bold mb-2">Hợp tác</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#" className="!text-primary">
                  Quà tặng doanh nghiệp
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Đối tác mua sỉ
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Thiết kế theo yêu cầu
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Catalogue sản phẩm
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col  gap-2">
            <p className="text-base font-bold mb-2">Chính sách</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#" className="!text-primary">
                  Đổi trả
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Giao hàng
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Bảo mật
                </Link>
              </li>
              <li>
                <Link to="#" className="!text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
