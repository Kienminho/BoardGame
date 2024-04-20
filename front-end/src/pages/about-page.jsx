import { Tabs } from "antd";

const AboutThisCompany = () => {
  return (
    <div className="flex flex-wrap mt-10">
      <div className="w-full md:w-1/2">
        <img src="/images/Tourane_Render_04.png" alt="Image 1" />
      </div>
      <div className="w-full md:w-1/2">
        <div className=" h-full p-10 flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-8">VISION</h3>
          <div className="text-lg">
            Chúng tôi luôn phấn đấu không mệt mỏi hướng tới mục tiêu trở thành
            doanh nghiệp dẫn đầu về nền tảng board game tại Việt Nam. Từ đó,
            bằng tầm ảnh hưởng, chúng tôi hy vọng có thể đưa ngành board game
            Việt Nam ra thị trường quốc tế, kết nối các giá trị văn hóa và gắn
            kết những người yêu thích board game trên toàn thế giới lại với
            nhau.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className=" h-full p-10 flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-8">MISSION</h3>
          <div className="text-lg">
            Chúng tôi chuyên thiết kế và phát triển các trò chơi board game chất
            lượng cao vừa mang tính giáo dục vừa mang tính giải trí, thể hiện sự
            đa dạng và phong phú của văn hóa lịch sử và ẩm thực Việt Nam. Sứ
            mệnh của chúng tôi là xây dựng một cộng đồng những người đam mê trò
            chơi board game, nơi mọi người có thể chia sẻ niềm đam mê và kiến
            thức về văn hóa Việt Nam. Đồng thời, chúng tôi mong muốn nâng cao sự
            hiểu biết và thúc đẩy kết nối giữa các nền văn hóa khác nhau thông
            qua trò chơi.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src="/images/Tourane_Render_05.png" alt="Image 2" />
      </div>
    </div>
  );
};

const CraftArt = () => {
  return (
    <div className="flex flex-col mt-10 ">
      <div className="flex items-center flex-col">
        <h2 className="text-4xl font-bold mb-4">GIỚI THIỆU:</h2>
        <div className="max-w-[650px] text-center leading-8 text-lg">
          <div>
            Legacy Tales mong muốn khẳng định mình là công ty hàng đầu cung cấp
            các sản phẩm giải trí kết hợp yếu tố giáo dục với mục đích chia sẻ
            và lan tỏa các giá trị văn hóa các vùng miền tại Việt Nam. Mục tiêu
            chính của chúng tôi là đặt ra tiêu chuẩn chia sẻ thông tin về du
            lịch, ẩm thực địa phương, phong cảnh và địa danh cho khách hàng. Với
            tầm nhìn hướng tới tương lai, chúng tôi hy vọng sẽ mở rộng dự án này
            để bao gồm các điểm du lịch quan trọng khác ở Việt Nam. Việc tạo ra
            một trò chơi bảng tương tác làm nổi bật sự đa dạng và phong phú về
            văn hóa của Việt Nam sẽ giúp dự án mang tính thay đổi này trở nên
            sống động đồng thời đóng vai trò là một nền tảng giải trí và giáo
            dục
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
