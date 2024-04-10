import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import { decrementCart, incrementCart, removeFromCart } from '@/redux/CartSlice'
import "./CheckoutFull.css"

const CheckoutItems = () => {
  const items = useSelector((state:Rootstate) => state.cart.products)
  const dispatch = useDispatch()

  return (
    items.map((item) => {
      return (
        <div key={item.id}>
          <div className='checkout_full_container'>
            <div className='checkout_full_div'>
              <div className='checkout_full_img'> 
                <img className='p-16' 
                  src={item.img} 
                  alt="img" />
              </div>
              <div className='checkout_full_product_div'> 
                <div className='checkout_full_productName'>
                  {item.productName}
                </div>
                <div className='checkout_full_options'>
                  <p className='text-sm mr-3'>({item.options})</p>
                  <div className='flex mt-2'>
                  <p className='checkout_full_option'>✅ Amazon's choice</p>
                  </div>
                </div>
                <div className='checkout_full_btn_div'>
                  <div className='checkout_full_btn'
                    onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                  <div className='checkout_full_btn'>{item.quantity}</div>
                  <div className='checkout_full_btn'
                    onClick={()=> dispatch(incrementCart(item.id))}>+</div>                                                                                            
                </div>
                <div className='checkout_full_sub_btns'>
                  <button className='btn_checkout' 
                    onClick={() => dispatch(removeFromCart(item.id))}>Rimuovi</button>  
                  <button className='btn_checkout'>Salva per Dopo</button>                                      
                  <button className='btn_checkout'>Condividi</button>                                      
                  <Link href={"/product"}>
                    <button className='btn_checkout'>
                    Visualiiza gli altri articoli simili</button>                                      
                  </Link>
                </div>
              </div>
            </div>
            <div className='checkout_full_price_div'> 
              <div className='checkout_full_price '>
                {item.price}€
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default CheckoutItems
