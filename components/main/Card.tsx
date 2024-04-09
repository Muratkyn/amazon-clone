import React from 'react'
import Link from 'next/link'
import "./Card.css"

interface Props {
  title: string,
  img: string,
  link: string
} 

const Cards = ({title, img, link}: Props) => {
  return (
    <div className='card_div'>
      <Link href={"/product"}>
        <div className='card_title'>
          {title}
        </div>
        <div className='card_img_div'>
          <img className='card_img' src={img} alt="img" />
          </div>
        <div className='card_link'>
          {link}
        </div>
      </Link>
    </div>
  )
}

export default Cards
