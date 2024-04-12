"use client"

import React, {useState} from 'react'
import { addToCart } from '@/redux/CartSlice'
import { useDispatch } from 'react-redux'
import { PRODUCTS } from '@/Products'
import Rate from '../rate/Rate'
import "./SingleProduct.css"

const SingleProduct = () => {
 const [product, setProducts] = useState(PRODUCTS)
 const dispatch = useDispatch()

  return (
    <div >
      <div className='single__container'>
        {product.map((product) => (
          <div key={product.id} className='single__products'>
            <div className='single__img--container'>
              <img className='single__img' src={product.img} alt="img" />
              </div>
            <div className='single__product--name'>
              {product.productName}
            </div>
            <Rate />
          <span className='single__product--price'>{product.price}€</span>
          <span className='single__product--options'>({product.options})</span>
          <div className='single__btn--container'>
            <button onClick={() => dispatch(addToCart((product)))} className='single__btn--add'>
              Aggiungi al carrello
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default SingleProduct