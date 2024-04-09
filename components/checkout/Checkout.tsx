"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import Link from 'next/link'
import { removeFromCart, incrementCart, decrementCart } from '@/redux/CartSlice'
import "./Checkout.css"
import CheckoutEmpty from './CheckoutEmpty'
import CheckoutItems from './CheckoutFull'

const Checkout = () => {
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
            <div><img src='./images/amazon-cart-image.jpg' alt="img"></img></div>
          </div>
        </div>
          <div className='min-w-[50%] max-w-[80%] h-auto m-auto pt-8'>
              <div className='grid grid-cols-8 gap-10 mb-12'>
                {/* Products */}
                  <div className='col-span-6 bg-white'>
                        
                      {itemsNumber > 0 ?  
                       <div>
                       <div className='text-2xl xl:text-3xl mt-4 pl-10'>Carrello</div>
                       <div className='flex flex-col items-end mr-8'>
                         <p>prezzo</p>
                       </div>
                       <CheckoutItems /> 
                      </div>       
                       :
                       <CheckoutEmpty />
                      }
                      {
                        itemsNumber > 0 &&
                      <div className='text-lg xl:text-xl text-right mb-2 mr-10 '>Totale provissorio ({itemsNumber}): <span 
                      className='font-semibold'>{subtotal}€</span>
                      </div>
                      }
                  </div>
                <div className='col-span bg-white rounded h-[280px] w-[300px] p-10'>
                    <div className='text-xs text-green-800 mb-2'> ✅ Benvenuto in Amazon!<span 
                    className='font-bold'>Spedizione GRATUITA</span> sul tuo primo ordine. Selezionare questa opzione al momento della conferma dell’ordine. Dettagli
                     </div>
                    <div className='text-base xl:text-lg mb-4 '>Totale provissorio({itemsNumber} articoli): <span 
                      className='font-semibold'>{subtotal}€</span>
                    </div>
                      <Link href={"/payment"}>
                      <button className='bg-yellow-400 p-1.5 rounded-xl w-[100%] mt-2 text-sm hover:bg-yellow-500 hover:border'>Procedi all'ordine</button>
                      </Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Checkout


// OPTIMIZE THE TERN OPS
