"use client"

import React from 'react'
import Rate from '../rate/Rate'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='text'>
    <h1>Idoneo all spedizione gratuita</h1>
        <div className='div_container '>
            <input type="checkbox" className='m-1' />
            <p className='text'>Spedizione gratuita con Amazon  </p>
        </div>
    <h1>Prodotti piu sostenibili</h1>
        <div className='div_container'>
            <input type="checkbox" className='m-1' />
            <p className='text'>Climate Pedge friendly</p>
        </div>
    <p>Recensione del Cliente</p>   
    <p className='highlight'>Marca</p>
        <div className='mb-4 flex flex-col'>
            <div className='div_checkbox'>
                <input type="checkbox" className='m-1' />
                <p className='text'>HP</p>
            </div>
            <div className='div_checkbox'>
                <input type="checkbox" className='m-1' />
                <p className='text'>Apple</p>
            </div>
            <div className='div_checkbox'>
                <input type="checkbox" className='m-1' />
                <p className='text'>Logitech</p>
            </div>
            <div className='div_checkbox'>
                <input type="checkbox" className='m-1' />
                <p className='text'>Samsung</p>
            </div><div className='div_checkbox'>
                <input type="checkbox" className='m-1' />
                <p className='text'>Lenovo</p>
            </div>
        </div>
        <div className='highlight'>Media recensioni clienti</div>
        <Rate />
        <Rate />
        <Rate />
  <div>
    <h1>Prezzo</h1>
    <div className='prices'>
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
