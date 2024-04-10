"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import CheckoutEmpty from './CheckoutEmpty'
import CheckoutFull from './CheckoutFull'
import Link from 'next/link'
import "./Checkout.css"

const Checkout = () => {
    const itemsNumber = useSelector((state:Rootstate) => 
      state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => 
      state.cart.products.reduce((subtotal, product) => 
    subtotal + (product.price * product.quantity), 0
    ))
    
  return (
    <div className='checkout_container'>
      <div className='checkout_banner_section'>
        <div className='checkout_banner'>
          <Link href={"/product"}>
            <button className='checkout_banner_link'>Scopri di piu</button>
          </Link>
          <div>
            <button className='text-sm'>
            <span className='font-bold'>Metti da parte il budget 
              per i tuoi futuri acquisti </span>
              Amazon Ricarica</button>
          </div>
            <img 
            src='./images/amazon-cart-image.jpg' 
            alt="img">
            </img>
        </div>
      </div>
      <div className='checkout_items_container'>
        <div className='checkout_items_div'>
          <div className='checkout_items'> 
            {itemsNumber > 0 ?  
              <div>
              <div className='checkout_items_cart'>Carrello</div>
              <div className='checkout_items_price'>
                <p>prezzo</p>
              </div>
              <CheckoutFull />                
              <div className='checkout_items_total'>
                Totale provissorio ({itemsNumber}): 
                <span className='font-bold'>{subtotal}€</span>
              </div>
            </div>       
              :<CheckoutEmpty />
            }
          </div>
          <div className='checkout_box'>
            <div className='checkout_box_text'> ✅ Benvenuto in Amazon!<span 
              className='font-bold'>Spedizione GRATUITA</span> sul tuo primo ordine. 
              Selezionare questa opzione al momento della conferma dell’ordine. Dettagli
            </div>
            <div className='checkout_box_total'>Totale provissorio({itemsNumber} articoli):<span 
              className='font-semibold'>{subtotal}€</span>
            </div>
            <Link href={"/payment"}>
              <button className='checkout_box_btn'>Procedi all'ordine</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

