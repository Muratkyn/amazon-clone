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
            <div className='cart_items_div'>
              <div>    
                <img className='cart_items_img' src={item.img} alt="small" />
              </div>
              <div className='cart_items_list'>
                <div className='cart_items_text'>
                  <h1 className='cart_items_name'>{item.productName}</h1> 
                  <p className='cart_items_option'>({item.options})</p>
                </div>
                <div className='cart_items_btns'>
                  <div className='cart_items_btn'
                    onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                  <div className='cart_items_btn'>{item.quantity}</div>
                  <div className='cart_items_btn'
                    onClick={()=> dispatch(incrementCart(item.id))}>+</div>                                                                                                                                   
                </div>   
              </div>
              <div className='cart_items_price_div'>
                <h1>{item.price}€</h1>  
              </div>
              <button className='cart_items_btn_remove' 
                onClick={() => dispatch(removeFromCart(item.id))}>X
              </button>
            </div>
          </div>
        )}): 
        <div>
          <div className='cart_items_checkout'>
            <div>
              <img className='cart_items_empty_img' 
               src="./images/empty-cart_.svg" 
               alt="img" />
            </div>
            <div className='p-6 mt-6'>
              <Link href={"/product"}>
              <p className='cart_items_empty_text'>Il tuo carrello Amazon e' vuoto!</p>
              <button className='cart_items_empty_btn'>Inizia qui.</button>
              </Link>
            </div>
          </div>
        </div>                          
      }
      <div className='cart_items_total'>Totale provissorio ({itemsNumber}): 
        <span className='cart_items_subtotal'>{subtotal}€</span>
      </div>
    </div>
  )
}

export default CartItems
