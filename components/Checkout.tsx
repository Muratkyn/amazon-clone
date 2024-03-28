import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import { ProductProps } from '@/type'
import Link from 'next/link'

const Checkout = () => {
    const items = useSelector((state:Rootstate) => state.cart.products)
    const itemsNumber = useSelector((state:Rootstate) => state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => state.cart.products.reduce((subtotal, product) => 
    subtotal + (product.price * product.quantity), 0
    ))
   
  return (
    <div>
      <div className='h-screen bg-amazonColors-backgroundColor overflow-scroll'>
        <div className='min-w[700px] max-w-[1000px] h-[140px] m-auto pt-8 flex items-center justify-center'>
          <div className='bg-white w-[90%] h-[130px] flex flex-row justify-center items-center gap-20'>
            <Link href={"/product"}><button className='text-sm border border-solid border-grey rounded-lg p-1.5 shadow-lg hover:bg-slate-100'>Scopri di piu</button></Link>
            <div><button className='text-sm'><span className='font-bold'>Metti da parte il budget per i tuoi futuri acquisti </span>Amazon Ricarica</button></div>
            <div><img src='./images/amazon-cart-image.jpg'></img></div>
          </div>
        </div>
          <div className='min-w[1000px] max-w-[1500px] h-auto m-auto pt-8'>
              <div className='grid grid-cols-8 gap-10 mb-12'>
                {/* Products */}
                  <div className='col-span-6 bg-white'>
                      <div className='text-2xl xl:text-3xl m-4 pl-8'>Carrello</div>
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
                                              <p>dfjdh</p>
                                            </div>
                                            <div className='grid grid-cols-3 w-20 flex'>
                                                <div className='text-xl xl:text-2xl bg-gray-400 rounded pl-2'>-</div>
                                                <div className='text-xl xl:text-xl bg-gray-200 pl-2 '>{item.quantity}</div>
                                                <div className='text-xl xl:text-2xl bg-gray-400 rounded pl-2'>+</div> 
                                                <button>Delete</button>                                              
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
                      <Link href={"/payment"}>
                      <button className='bg-yellow-500 p-2 rounded-xl w-[100%]  hover:bg-yellow-600 hover:border'>Procedi all'ordine</button>
                      </Link>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Checkout
