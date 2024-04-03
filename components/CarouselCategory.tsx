"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import "swiper/css/navigation";
import "swiper/css";

const CarouselCategory = () => {
  return (
    <div className='bg-white max-w-[1480px] m-auto p-5'>
        <div className="text-2xl font-semibold m-auto" >Festa delle Offerte di Primavera per categoria</div>
          <Link href={"/product"}>
            <Swiper
                slidesPerView={6}
                loop ={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src={'/images/carousel-category1.jpg'}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'/images/carousel-category2.jpg'}></img>
                </SwiperSlide><SwiperSlide>
                    <img src={'/images/carousel-category3.jpg'}></img>
                </SwiperSlide><SwiperSlide>
                    <img src={'/images/carousel-category4.jpg'}></img>
                </SwiperSlide><SwiperSlide>
                    <img src={'/images/carousel-category5.jpg'}></img>
                </SwiperSlide><SwiperSlide>
                    <img src={'/images/carousel-category6.jpg'}></img>
                </SwiperSlide><SwiperSlide>
                    <img src={'../images/carousel-category7.jpg'}></img>
                </SwiperSlide>
            </Swiper>
          </Link>
    </div>
  )
}

export default CarouselCategory
