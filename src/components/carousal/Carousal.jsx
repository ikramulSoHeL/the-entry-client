import React from "react";
import "../../styles/components/index.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";

import carousalData from "./data";

const Carousal = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="carousal">
      <Swiper
        className="mySwiper"
        pagination={pagination}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {carousalData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousal__item">
              <img src={item.image} alt={item.title} />
              <div className="carousal__item__title">
                <h1>{item.title}</h1>
                <h1>{item.title2}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
