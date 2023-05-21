import React from "react";
import "./carousal.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
        modules={[Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {carousalData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousal__item">
              <img src={item.image} alt={item.title} />
              <div className="carousal__item__title">
                <h1>{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
