// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { StyleSet } from "../../../../commons/style/styleSet";

const Background = styled.div`
  width: 100%;
  background: black;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  // width: 1000px;
  // height: 500px;
`;

export default function IndexMainCarouselSwipe() {
  return (
    <Background>
      <Wrapper className="wrapper">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./img/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/6.jpg" />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Background>
  );
}
