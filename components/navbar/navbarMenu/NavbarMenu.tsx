"use client"

import React, { useState  } from 'react'
import "./NavbarMenu.css"
import Link from 'next/link'
import NavbarMenuOpen from '../NavbarMenuOpen'
import { Bars3Icon } from '@heroicons/react/16/solid'

const NavbarMenu = () => {                                   
    const [navbarOpen, setNavbarOpen] = useState(false)
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

  return (
    <div className='navbarMenu__container '>
        <Bars3Icon onClick={() => toggleNavbar()} className='h-[28px]'/>
        {navbarOpen &&
          <NavbarMenuOpen toggleNavbar={toggleNavbar}/>
        }
        <Link className='font-bold' href="/product">
          Tutte
        </Link>
        <p>Bestseller</p>
        <p>Libri</p>
        <p>Novita'</p>
        <p>Amazon</p>
        <p>Offerte</p>
        <p>Prime</p>
        <p>Musica</p>
        <p>Libri</p>
        <p>Moda</p>
        <p>Domestici</p>
        <p>Libri</p>
        <p>Musica</p>
        <p>Animali</p>
        <p>Auto</p>
        <div className='navbarMenu__promo'>
          <img 
            className='navbarMenu__play--icon' 
            src="./images/play.svg" 
            alt="img" />
          <Link 
           href={"/product"}>
           <p className='navbarMenu__prime'>AMAZON PRIME <span 
            className='navbarMenu_text'>| 
            Iscriviti, gratis per 30 giorni</span>
           </p>
          </Link>
        </div> 
    </div>
  )
}

export default NavbarMenu
