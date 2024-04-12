"use client";

import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css";
import "./Carousel.css"

const Carousel = () => {
  return (
    <div className='carousel__div'>
        <Link href={"/product"}  >
            <Swiper
                loop={true}
                spaceBetween={0}
                className="carousel__swiper"
                modules={[Navigation, Autoplay]}
                navigation= {true}
                autoplay={{
                    delay:4000
                }} >
                <SwiperSlide >
                    <img src="../images/carousel1.jpg" alt="image1" ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../images/carousel2.jpg" alt="image4"  ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../images/carousel3.jpg" alt="image3" ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../images/carousel4.jpg" alt="image4"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../images/carousel5.jpg" alt="image5" ></img>
                </SwiperSlide>
            </Swiper>
        </Link>
        <div className="carousel__shade" />
    </div>
  )
}

export default Carousel
