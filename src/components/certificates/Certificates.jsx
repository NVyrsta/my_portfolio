import React from 'react';
import './certificates.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

export const Certificates = () => {
  return (
    <section className="section certificates container">
      <h2 className="section__title">My Certificates</h2>
      <span className="section__subtitle">
        Validating My Skills and Knowledge
      </span>

      <Swiper
        className="certificates__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48
          }
        }}
        modules={[Pagination]}
      >
        {Data.map((item) => (
          <SwiperSlide className="certificates__card" key={item}>
            <img
              src={item}
              alt="certificate"
              className="certificates__img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
