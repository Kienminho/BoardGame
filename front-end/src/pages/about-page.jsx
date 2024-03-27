import { Tabs } from "antd";

const AboutThisCompany = () => {
  return (
    <div className="flex flex-wrap mt-10">
      <div className="w-full md:w-1/2">
        <img
          src="https://www.maztermind.vn/cdn/shop/files/1_1500x1500_4db0bd5c-2bdf-490d-9d6a-6b32ec05bc75.jpg?v=1694424763&width=1400"
          alt="Image 1"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className=" h-full p-10 flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-8">
            Cách tân mới tạo nên một “Ván cờ nghệ thuật”
          </h3>
          <div className="text-lg">
            Từ những bàn tay khéo léo của người thợ Việt tới ngôi nhà của bạn,
            mỗi bộ cờ của Maztermind đều được thiết kế sáng tạo và tỉ mỉ, kỳ
            công để biến mọi cuộc chơi thành một “Ván cờ nghệ thuật”. Chúng tôi
            không chỉ tạo ra một trò chơi đơn thuần, chúng tôi còn tạo nên những
            khoảnh khắc kết nối cho bạn và những người thân yêu, và hơn hết, là
            những giá trị nghệ thuật vượt thời gian.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className=" h-full p-10 flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-8">
            Kết hợp truyền thống vào những thiết kế đương đại
          </h3>
          <div className="text-lg">
            Là một nhà thiết kế board games, chúng tôi trân trọng mỗi vị khách
            như một người “bạn cùng chơi”. Bởi vậy, chúng tôi luôn mong muốn gửi
            gắm bạn những sản phẩm thủ công nghệ thuật cao cấp, được nghiên cứu,
            chọn lọc từng loại vật liệu, áp dụng các kỹ thuật chuyên môn,... để
            vừa có thể mang đến những giá trị thẩm mỹ, nâng cao trải nghiệm
            người chơi mà không làm mất đi vẻ đẹp truyền thống, giá trị cốt lõi
            của trò chơi.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="https://www.maztermind.vn/cdn/shop/files/nicolas-picard-i_0c77gV5V0-unsplash.jpg?v=1694425004&width=1400"
          alt="Image 1"
        />
      </div>
    </div>
  );
};

const CraftArt = () => {
  return (
    <div className="flex flex-col mt-10 ">
      <div className="flex items-center flex-col">
        <h2 className="text-4xl font-bold mb-4">Nâng tầm nghệ thuật chơi</h2>
        <div className="max-w-[650px] text-center leading-8 text-lg">
          <div>
            02 năm, 9 tháng là thời gian chúng tôi nghiên cứu và phát triển từng
            chi tiết của 10 bộ games đầu tiên. Bắt đầu từ con số 0 với những ý
            tưởng chỉ vỏn vẹn trên giấy, cho đến những bản mẫu (prototype) đầu
            tiên trên tay, Maztermind lần đầu cho ra mắt những board games nghệ
            thuật vào năm 2020 với sự tâm huyết và tỉ mỉ của đội ngũ nghệ nhân
            thủ công Việt Nam.
          </div>
          <br />
          <div>
            Bằng mong muốn nâng tầm trải nghiệm chơi cho những board games
            truyền thống, mỗi ván cờ của Maztermind không chỉ đơn thuần là sợi
            dây kết nối mọi người sâu sắc hơn, mà còn thể hiện được phong cách
            sống và cá tính riêng của người chơi.
          </div>
        </div>
      </div>
      <AboutThisCompany />
    </div>
  );
};

const AboutPage = () => {
  const items = [
    {
      key: "1",
      label: <div className="font-semibold text-lg">Về Board Game</div>,
      children: <AboutThisCompany />,
    },
    {
      key: "2",
      label: <div className="font-semibold text-lg">Nghệ thuật thủ công</div>,
      children: <CraftArt />,
    },
  ];
  return (
    <div className="container mx-auto my-10 px-2">
      <Tabs centered defaultActiveKey="1" items={items} />
    </div>
  );
};

export default AboutPage;
