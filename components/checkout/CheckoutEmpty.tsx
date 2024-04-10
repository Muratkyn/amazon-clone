import React from 'react'
import Link from 'next/link'
import "./CheckoutEmpty.css"

const CheckoutEmpty = () => {
  return (
    <div>
      <div className='cart_items_checkout'>
        <div>
          <img className='checkout_empty_img' 
            src="./images/empty-cart_.svg" 
            alt="empty_cart" />
        </div>
        <div className='p-6 mt-6'>
          <p className='checkout_empty_text'>
            Il tuo carrello Amazon è vuoto</p>
          <Link href={"/product"}>
            <p className='checkout_empty_link'>
              Acquista le offerte di oggi</p>
          </Link>
          <button className='checkout_empty_btn_first'>
            Accedi al tuo account.</button>
          <button className='checkout_empty_btn_second'>
            Iscriviti ora</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutEmpty
