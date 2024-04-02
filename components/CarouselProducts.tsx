"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import "swiper/css/navigation";
import "swiper/css";

const CarouselProducts = () => {
  return (
    <div className='bg-white m-3 p-5 w-auto'>
        <div className='text-2xl font-semibold p-3'>Best sellers
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            loop={true}
        >
            {
                Array.from ( { length: 9 }, (_, i) => 
                <SwiperSlide key={i} className='relative'>
                    <Link href={`/product`}>
                    <img src={`../images/product_${i}_small.jpg`}  alt="img" />
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
