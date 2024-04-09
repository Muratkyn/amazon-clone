import Link from 'next/link'
import React from 'react'

const CheckoutEmpty = () => {
  return (
    <div>
          <div className='cart_items_checkout'>
            <div>
              <img className='w-[500px] h-[300px] p-10' src="./images/empty-cart_.svg" alt="empty_cart" />
            </div>
            <div className='p-6 mt-6'>
              <p className='text-md md:text-2xl '>Il tuo carrello Amazon è vuoto</p>
              <Link href={"/product"}>
                <p className='text-xs font-semibold text-cyan-700 mb-4'>Acquista le offerte di oggi</p>
              </Link>
              <button className='bg-yellow-400 p-1.5 mr-2 rounded-lg text-sm shadow-lg hover:bg-yellow-500 cursor-pointer'>Accedi al tuo account.</button>
              <button className='bg-white shadow-lg border p-1.5 mr-2 rounded-lg text-sm hover:bg-gray-100 cursor-pointer'>Iscriviti ora</button>
            </div>
          </div>
        </div>
  )
}

export default CheckoutEmpty
