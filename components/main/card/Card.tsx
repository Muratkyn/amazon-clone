import React from 'react'
import Link from 'next/link'
import "./Card.css"
import { Props } from '@/types/type'

const Cards = ({title, img, link}: Props) => {
  return (
    <div className='card__div'>
      <Link href={"/product"}>
        <div className='card__title'>
          {title}
        </div>
        <div className='card__img--div'>
          <img className='card__img' 
           src={img} 
           alt="img" />
        </div>
        <div className='card__link'>
          {link}
        </div>
      </Link>
    </div>
  )
}

export default Cards
