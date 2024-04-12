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
          <div className='checkout__full--container'>
            <div className='checkout__full--div'>
              <div className='checkout__full--img'> 
                <img className='p-16' 
                  src={item.img} 
                  alt="img" />
              </div>
              <div className='checkout__full--product__div'> 
                <div className='checkout__full--productName'>
                  {item.productName}
                </div>
                <div className='checkout__full--options'>
                  <p className='text-sm mr-3'>({item.options})</p>
                  <div className='flex mt-2'>
                  <p className='checkout__full--option'>✅ Amazon's choice</p>
                  </div>
                </div>
                <div className='checkout__full--btn__div'>
                  <div className='checkout__full--btn'
                    onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                  <div className='checkout__full--btn'>{item.quantity}</div>
                  <div className='checkout__full--btn'
                    onClick={()=> dispatch(incrementCart(item.id))}>+</div>                                                                                            
                </div>
                <div className='checkout__full--sub__btns'>
                  <button className='btn__checkout' 
                    onClick={() => dispatch(removeFromCart(item.id))}>Rimuovi</button>  
                  <button className='btn__checkout'>Salva per Dopo</button>                                      
                  <button className='btn__checkout'>Condividi</button>                                      
                  <Link href={"/product"}>
                    <button className='btn__checkout'>
                    Visualiiza gli altri articoli simili</button>                                      
                  </Link>
                </div>
              </div>
            </div>
            <div className='checkout__full--price__div'> 
              <div className='checkout__full--price '>
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
