"use client"

import React from 'react'
import Rate from '../rate/Rate'
import "./Sidebar.css"

const Sidebar = () => {   
  return (
    <div className='sidebar_container'>
    <h1>Idoneo all spedizione gratuita</h1>
        <div className='sidebar_input '>
            <input type="checkbox" className='m-1' />
            <p className='text'>Spedizione gratuita con Amazon  </p>
        </div>
    <h1>Prodotti piu sostenibili</h1>
        <div className='sidebar_input'>
            <input type="checkbox" className='m-1' />
            <p className='text'>Climate Pedge friendly</p>
        </div>
    <p>Recensione del Cliente</p>   
    <p className='sidebar_text'>Marca</p>
        <div className='sidebar_checkbox_container'>
            <div className='sidebar_checkbox'>
                <input type="checkbox" className='m-1' />
                <p>HP</p>
            </div>
            <div className='sidebar_checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Apple</p>
            </div>
            <div className='sidebar_checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Logitech</p>
            </div>
            <div className='sidebar_checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Samsung</p>
            </div><div className='sidebar_checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Lenovo</p>
            </div>
        </div>
        <div className='sidebar_text'>Media recensioni clienti</div>
        <Rate />
        <Rate />
        <Rate />
  <div>
    <h1>Prezzo</h1>
    <div className='sidebar_prices'>
        <p>Fino a 5 EUR</p>
        <p>5 a 10 EUR</p>
        <p>10 a 20 EUR</p>
        <p>20 a 50 EUR</p>
        <p>50 e più</p>
    </div>
  </div>
</div>
  )
}

export default Sidebar
