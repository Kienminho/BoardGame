// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperList = [
  {
    id: 1,
    src: "/images/slide01.png",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "/images/slide02.png",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "/images/slide03.png",
    alt: "Slide 3",
  },
];

const Slide = () => {
  return (
    <Swiper
      className="mySwiper mt-2"
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {swiperList.map(({ id, src, alt }) => {
        return (
          <SwiperSlide key={id}>
            <img className="h-full w-full object-cover" src={src} alt={alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slide;
