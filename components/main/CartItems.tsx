"use client"

import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Rootstate } from '@/redux/store'
import { removeFromCart, incrementCart, decrementCart } from '@/redux/CartSlice'
import "./CartItems.css"

const CartItems = () => {
    const items = useSelector((state:Rootstate) => 
      state.cart.products)
    const itemsNumber = useSelector((state:Rootstate) => 
      state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => 
      state.cart.products.reduce((subtotal, product) => 
      subtotal + (product.price * product.quantity), 0
    ))
    const dispatch = useDispatch()
  return (
    <div className='w-[480px]'>
      {itemsNumber > 0 ?          
        items.map((item) => {
          return (
          <div key={item.id} >
            <div className='cart__items--div'>
              <div>    
                <img className='cart__items--img' src={item.img} alt="small" />
              </div>
              <div className='cart__items--list'>
                <div className='cart__items--text'>
                  <h1 className='cart__items--name'>{item.productName}</h1> 
                  <p className='cart__items--option'>({item.options})</p>
                </div>
                <div className='cart__items--btns'>
                  <div className='cart__items--btn'
                    onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                  <div className='cart__items--btn'>{item.quantity}</div>
                  <div className='cart__items--btn'
                    onClick={()=> dispatch(incrementCart(item.id))}>+</div>                                                                                                                                   
                </div>   
              </div>
              <div className='cart__items--price__div'>
                <h1>{item.price}€</h1>  
              </div>
              <button className='cart__items--btn__remove' 
                onClick={() => dispatch(removeFromCart(item.id))}>X
              </button>
            </div>
          </div>
        )}): 
        <div>
          <div className='cart__items--checkout'>
            <div>
              <img className='cart__items--empty__img' 
               src="./images/empty-cart_.svg" 
               alt="img" />
            </div>
            <div className='p-6 mt-6'>
              <Link href={"/product"}>
              <p className='cart__items--empty__text'>Il tuo carrello Amazon e' vuoto!</p>
              <button className='cart__items--empty__btn'>Inizia qui.</button>
              </Link>
            </div>
          </div>
        </div>                          
      }
      <div className='cart__items--total'>Totale provissorio ({itemsNumber}): 
        <span className='cart__items--subtotal'>{subtotal}€</span>
      </div>
    </div>
  )
}

export default CartItems
