import React from 'react'
import Link from 'next/link'
import "./CheckoutEmpty.css"

const CheckoutEmpty = () => {
  return (
    <div>
      <div className='cart__items--checkout'>
        <div>
          <img className='checkout__empty--img' 
            src="./images/empty-cart_.svg" 
            alt="empty_cart" />
        </div>
        <div className='p-6 mt-6'>
          <p className='checkout__empty--text'>
            Il tuo carrello Amazon è vuoto</p>
          <Link href={"/product"}>
            <p className='checkout__empty--link'>
              Acquista le offerte di oggi</p>
          </Link>
          <button className='checkout__empty--btn__first'>
            Accedi al tuo account.</button>
          <button className='checkout__empty--btn__second'>
            Iscriviti ora</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutEmpty
