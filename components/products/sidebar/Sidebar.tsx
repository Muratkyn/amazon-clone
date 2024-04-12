"use client"

import React from 'react'
import Rate from '../rate/Rate'
import "./Sidebar.css"

const Sidebar = () => {   
  return (
    <div className='sidebar__container'>
    <h1>Idoneo all spedizione gratuita</h1>
        <div className='sidebar__input '>
            <input type="checkbox" className='m-1' />
            <p>Spedizione gratuita con Amazon  </p>
        </div>
    <h1>Prodotti piu sostenibili</h1>
        <div className='sidebar__input'>
            <input type="checkbox" className='m-1' />
            <p>Climate Pedge friendly</p>
        </div>   
    <p className='sidebar__text'>Marca</p>
        <div className='sidebar__checkbox--container'>
            <div className='sidebar__checkbox'>
                <input type="checkbox" className='m-1' />
                <p>HP</p>
            </div>
            <div className='sidebar__checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Apple</p>
            </div>
            <div className='sidebar__checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Logitech</p>
            </div>
            <div className='sidebar__checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Samsung</p>
            </div><div className='sidebar__checkbox'>
                <input type="checkbox" className='m-1' />
                <p>Lenovo</p>
            </div>
        </div>
        <div className='sidebar__text'>Media recensioni clienti</div>
        <Rate />
        <Rate />
        <Rate />
  <div>
    <h1>Prezzo</h1>
    <div className='sidebar__prices'>
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
