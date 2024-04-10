"use client"

import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css";
import "./CarouselProducts.css"

const CarouselProducts = () => {
  return (
    <div className='carousel_prod_div'>
      <div className='carousel_prod_swiper'>Best sellers
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          loop={true}
        >
        {
          Array.from ( { length: 9 }, (_, i) => 
          <SwiperSlide 
           key={i} 
           className='relative'>
            <Link href={`/product`}>
            <img 
             src={`../images/product_${i}_small.jpg`}  
             alt="img" />
            </Link>
          </SwiperSlide>
         )
        }
        </Swiper>
      </div>
    </div>
  )
}
export default CarouselProducts
