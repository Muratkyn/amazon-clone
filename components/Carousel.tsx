"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css";


const Carousel = () => {
  return (
    <div className='h-[600px]'>
     <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[50%]"
        modules={[Navigation, Autoplay]}
        navigation= {true}
        autoplay={{
            delay:4000
        }}
     >
        <SwiperSlide >
            <img src="../images/carousel1.jpg" alt="image1" ></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../images/carousel2.jpg" alt="image4" ></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../images/carousel3.jpg" alt="image3" ></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../images/carousel4.jpg" alt="image4" ></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../images/carousel5.jpg" alt="image5" ></img>
        </SwiperSlide>
     </Swiper>
        <div className="h-[50%]  flex justify-center m-auto bg-gradient-to-b from-orange-600 to-slate-300" />
    </div>
  )
}

export default Carousel
