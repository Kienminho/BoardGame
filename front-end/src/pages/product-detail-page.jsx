import { ProductList, ThumbsGallery } from "../components";
import { Divider } from "antd";

const descriptions = [
  {
    id: "1",
    label:
      "Tiết kiệm 18% khi mua Combo Tết Xôm Vầy Nghinh Xuân kèm 4 lót ly, 2 bộ bài và 1 rượu mơ",
  },
  {
    id: "2",
    label:
      "Tiết kiệm 12% khi mua Combo Tết Xôm Vầy Mơ Xuân kèm 4 lót ly và 1 rượu mơ",
  },
  {
    id: "3",
    label: "Sự kết hợp độc đáo giữa bộ Bầu Cua và hộp mứt ngày Tết",
  },
  {
    id: "4",
    label: "Sử dụng kỹ thuật ghép gỗ, mộng gỗ tỉ mỉ và chuẩn xác",
  },
  {
    id: "5",
    label: "Được chế tác bởi 12 nghệ nhân trong vòng 20 giờ",
  },
  {
    id: "6",
    label: "Tự hào được làm thủ công tại Việt Nam",
  },
];

const ProductDetailPage = () => {
  return (
    <main className="my-10 space-y-10">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-[500px] w-full">
            <ThumbsGallery />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">
              Bầu Cua Ý Giao - Phiên Bản Gỗ
            </h1>
            <div className="bg-orange-200 inline-block px-2 py-1 rounded-md">
              New Arrival
            </div>
            <div className="text-xl">3.290.000₫</div>
            <ul className="space-y-4 list-disc p-4">
              {descriptions.map((description) => (
                <li key={description.id}>{description.label}</li>
              ))}
            </ul>
            <Divider />
            <div>
              <p className="text-gray-500">Số lượng: 30</p>
            </div>
            <button className="p-4 rounded-md bg-primary w-full text-white text-lg font-semibold">
              Liên hệ
            </button>
            <Divider />
            <p className="text-lg font-semibold">Liên hệ giao tết 2024</p>
            <Divider />
          </div>
        </div>
      </div>
      <img
        className="w-full"
        src="https://www.maztermind.vn/cdn/shop/files/YGiao_banner_PC_min.jpg?v=1703666250&width=3000"
        alt="Banner 1"
      />
      <div className="container mx-auto px-4">
        <div className="flex items-center flex-col">
          <h2 className="text-4xl font-bold mb-4">Ý tưởng thiết kế mới</h2>
          <div className="max-w-[650px] text-center leading-8">
            Trải qua quá trình nâng cấp sáng tạo, Bầu Cua Ý Giao là sự “kết
            giao” của những “ý tưởng” độc đáo. Để Bầu cua không chỉ là món ăn
            tinh thần mỗi dịp Tết, mà khi được kết hợp để trở thành Hộp mứt mang
            ý nghĩa kết nối thân tình, Bầu Cua Ý Giao còn trở thành một sản phẩm
            bền vững đi cùng gia chủ suốt mùa lễ Tết; từ lúc trang hoàng nhà
            cửa, chuẩn bị từng gói bánh mứt thiết đãi khách quý, đến những ngày
            mùng khi người thân quây quần bên nhau, rộn ràng vui chơi, trò
            chuyện. Để khi thấy Xuân về, Bầu Cua Ý Giao và Bạn, Bạn và những
            người thương yêu, chúng ta lại gặp nhau.
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.maztermind.vn/cdn/shop/files/feat-4-1_36261681-a543-43eb-af60-2a3fd6acf40c.jpg?v=1703653564&width=1800"
              alt="Image 1"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-orange-100 h-full p-10 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-8">
                Chất lượng thủ công bền vững
              </h3>
              <div>
                Thoả mãn trải nghiệm chơi của khách hàng từ từng chi tiết nhỏ
                nhất, bộ Bầu Cua Ý Giao được Maztermind chăm chút trong mỗi nét
                vẽ cho đến kết cấu tổng thể. Để cho ra một bộ sản phẩm đáp ứng
                cả hai công năng; mặt nắp là bộ bầu cua và phần thân là hộp đựng
                mứt tròn trịa, chúng tôi đã áp dụng những kỹ thuật ghép gỗ thủ
                công, sử dụng mộng gỗ để tạo sự kết nối chặt chẽ giữa các thành
                phần và tăng tính thẩm mĩ. Ba viên xí ngầu gỗ được in UV họa
                tiết rõ nét mang lại tiếng lắc vui tai đặc trưng. Để nâng cao
                chất lượng bảo quản thực phẩm, phần khay đựng mứt và hộp lắc xí
                ngầu được phủ một lớp dầu L.CO - một loại dầu thân thiện với
                người tiêu dùng.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-orange-100 h-full p-10 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-8">
                Món quà thay cho lời chúc năm mới
              </h3>
              <div>
                Với sự kết hợp giữa tranh Đông Hồ, và tạo hình hộp mứt hoa đào 6
                cánh, bộ Bầu Cua Ý Giao (gỗ) sẽ là một món phụ kiện trưng bày
                ngày tết cực kỳ ý nghĩa; chứa đựng những lời chúc sâu sắc về sự
                thịnh vượng và may mắn. Tết này hãy cùng bạn bè và những người
                thân yêu cùng nhau quây quần bên Bầu Cua Ý Giao để tạo nên những
                khoảnh khắc đặc biệt và đáng nhớ. Đây chắc chắn sẽ là một món
                quà tuyệt vời vừa tôn vinh văn hoá truyền thống vừa thay bạn
                trao gửi yêu thương.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://www.maztermind.vn/cdn/shop/files/feat-1-min_84edb7d9-2422-4d42-b51a-0649f936893e.jpg?v=1703653563&width=2000"
              alt="Image 1"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://www.maztermind.vn/cdn/shop/files/feat-2-min_793fb54a-0df3-45ea-acdb-e9365cbc469c.jpg?v=1703653564&width=2000"
              alt="Image 1"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-orange-100 h-full p-10 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-8">
                Cảm hứng tranh Đông Hồ
              </h3>
              <div>
                Bộ Bầu Cua Ý Giao, như một tác phẩm nghệ thuật độc đáo, đã rút
                ngắn khoảng cách giữa Tết xưa và nay, đưa cái Tết hiện đại gần
                hơn với những giá trị truyền thống của người Việt ta. Nguồn cảm
                hứng chính của sản phẩm đến từ tranh dân gian Đông Hồ, nơi mà
                màu sắc tươi tắn và nét vẽ phóng khoáng từ xa xưa đã trở thành
                lời chúc mừng năm mới với nhiều niềm vui và may mắn. Kế thừa
                những giá trị văn hoá quý báu của dân tộc, Maztermind với tinh
                thần cách tân, đã lồng ghép khéo léo và cách điệu từng chi tiết
                để gửi gắm vào các mặt Bầu Cua Ý Giao như một lời chúc phúc và
                thành công cho gia chủ.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-4xl font-bold mb-4">Có thể bạn cũng thích</p>
        <ProductList />
      </div>
    </main>
  );
};

export default ProductDetailPage;
