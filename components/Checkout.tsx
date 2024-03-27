import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'



const Checkout = () => {
    const items = useSelector((state:Rootstate) => state.cart.products)
    const itemsNumber = useSelector((state:Rootstate) => state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => state.cart.products.reduce((subtotal, product) => 
    subtotal + (product.price * product.quantity), 0
    ))
   
  return (
    <div>
      <div className='h-screen bg-amazonColors-backgroundColor'>
          <div className='min-w[1000px] max-w-[1500px] m-auto pt-8'>
              <div className='grid grid-cols-8 gap-10'>
                {/* Products */}
                  <div className='col-span-6 bg-white'>
                      <div className='text-2xl xl:text-3xl m-4'>Carrello</div>
                      {
                        items.map((item) => {
                          return (
                            <div key={item.id}>
                                <div className='grid grid-cols-12 divide-y divide-gray-400'>
                                    <div className='col-span-10 grid grid-cols-8 divide-y divide-gray-400'>
                                        <div className='col-span-2'> 
                                            <img className='p-10' src={item.img} alt="small" />
                                        </div>
                                        <div className='col-span-6 p-10'> 
                                            <div className='font-medium text-black mt-2'>
                                                {item.productName}
                                            </div>
                                            <div>
                                                <button>Delete</button>
                                            </div>
                                            <div className='grid grid-cols-3 w-20'>
                                                <div className='text-xl xl:text-2xl bg-gray-400 rounded'>-</div>
                                                <div className='text-xl xl:text-xl bg-gray-200'>{item.quantity}</div>
                                                <div className='text-xl xl:text-2xl bg-gray-400 rounded'>+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-2 p-10'> 
                                        <div className='text-lg xl:text-xl mt-2 mr-4 font-semibold'>{item.price}€</div>
                                    </div>
                                </div>
                            </div>
                          )
                        } )
                      }
                      <div className='text-lg xl:text-xl text-right mb-2 mr-4 '>Totale provissorio ({itemsNumber}): <span 
                      className='font-semibold'>{subtotal}€</span></div>
                  </div>

              <div className='col-span bg-white rounded h-[280px] w-[300px] p-10'>
                    <div className='text-xs text-green-800 mb-2'>Benvenuto in Amazon! <span 
                    className='font-bold'>Spedizione GRATUITA</span>sul tuo primo ordine. Selezionare questa opzione al momento della conferma dell’ordine. Dettagli
                     Delivery Details</div>
                    <div className='text-base xl:text-lg mb-4'>Totale provissorio({itemsNumber} articoli): <span 
                      className='font-semibold'>{subtotal}€</span></div>
                      <button className='bg-yellow-500 p-2 rounded-xl w-[100%]'>Procedi all'ordine</button>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Checkout
