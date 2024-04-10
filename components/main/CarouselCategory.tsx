"use client";

import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css";
import "./CarouselCategory.css"

const CarouselCategory = () => {
  return (
    <div className='carousel_cat_div'>
      <div className="carousel_cat_swiper" >
        Festa delle Offerte di Primavera per categoria
      </div>
        <Link href={"/product"}>
        <Swiper
            slidesPerView={6}
            loop ={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        > 
          <SwiperSlide>
            <img src={'/images/carousel-category1.jpg'} alt="img"></img>
          </SwiperSlide><SwiperSlide>
            <img src={'/images/carousel-category2.jpg'} alt="img"></img>
          </SwiperSlide><SwiperSlide>
            <img src={'/images/carousel-category3.jpg'} alt="img"></img>
          </SwiperSlide><SwiperSlide>
            <img src={'/images/carousel-category4.jpg'} alt="img"></img>
          </SwiperSlide><SwiperSlide>
            <img src={'/images/carousel-category5.jpg'} alt="img"></img>
          </SwiperSlide><SwiperSlide>
            <img src={'/images/carousel-category6.jpg'} alt="img"></img>
          </SwiperSlide><SwiperSlide>
            <img src={'../images/carousel-category7.jpg'} alt="img"></img>
          </SwiperSlide>
        </Swiper>
        </Link>
    </div>
  )
}

export default CarouselCategory
