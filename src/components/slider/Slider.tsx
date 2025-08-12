// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SliderImages } from "@/data/data";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      className="rounded-4xl custom-swiper"
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{ delay: 1500, disableOnInteraction: false }}
    >

      {SliderImages.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[500px]">
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="custom-next absolute top-1/2 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="#14453D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="custom-prev absolute top-1/2 left-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#14453D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Swiper>
  );
}
