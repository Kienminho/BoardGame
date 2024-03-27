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
    src: "https://images.unsplash.com/photo-1531084894170-d35c5a47f88a?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1531084894170-d35c5a47f88a?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531084894170-d35c5a47f88a?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531084894170-d35c5a47f88a?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531084894170-d35c5a47f88a?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slide 5",
  },
];

const Slide = () => {
  return (
    <Swiper
      className="mySwiper"
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
