import React from 'react'
import Link from 'next/link'

interface Props {
  title: string,
  img: string,
  link: string
} 

const Cards = ({title, img, link}: Props) => {
  return (
    <div className='h-[420px] bg-white m-3 '>
      <Link href={"/product"}>
        <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
          {title}
        </div>
        <div className='h-[300px] m-4'>
          <img className='h-[100%] w-[100%] object-cover cursor-pointer' src={img} alt="" />
          </div>
        <div className='text-xs xl:text-sm text-blue-500 ml-4 hover:text-orange-500 cursor-pointer'>
          {link}
        </div>
      </Link>
    </div>
  )
}

export default Cards
