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
      <div className='container'>
        {product.map((product) => (
          <div key={product.id} className='products'>
            <div className='img_container'>
              <img className='img' src={product.img} alt="img" />
              </div>
            <div className='product_name'>
              {product.productName}
            </div>
            <Rate />
          <span className='product_price'>{product.price}€</span>
          <span className='product_options'>({product.options})</span>
          <div className='btn_container'>
            <button onClick={() => dispatch(addToCart((product)))} className='btn_add'>
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