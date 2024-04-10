"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/16/solid'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import Search from '../search/Search'
import { motion } from 'framer-motion'
import CartItems from '../main/CartItems'
import { useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import "./NavbarTop.css"

const NavbarTop = () => {
  const cart = useSelector((state:Rootstate) => state.cart.productsNumber )
  const [onHover, setOnHover] = useState(false)
  const hoverTrue = () => {
    setOnHover(true)
}
  const hoverFalse = () => {
    setOnHover(false)
}
  return (
    <div className='navbarTop_main_container'>
        { /* Left */}
      <div className='navbarTop_container'>
        <Link href={"/"}>
          <img className='navbar_img' 
          src='../images/amazon.png' 
          alt='img'>    
          </img>
        </Link>
        <div className='navbar_text_div'>
          <div className='navbar_text'>
              In consegna a Monza
          </div>
          <div className='navbar_pin_icon'>
            <MapPinIcon className='h-[15px]'/>
              Aggiorna posizione
          </div>
        </div>
      </div>
        { /* Middle */}
        <div className='navbar_search'>
          <Search />
        </div>
        { /* Right */}    
        <div className='navbar_right'>
          <div className='navbar_right_div'>
            <div className='navbar_text'>
              Ciao, accedi
            </div>
            <div className='navbar_text_bold'>
              Account e liste
            </div>
          </div>
            <div className='navbar_text_div'>
                <div className='navbar_text'>
                    Resi
                </div>
                <div className='navbar_text_bold'>
                    e ordini
                </div>
            </div>
            <div onMouseOver={() => hoverTrue()} onMouseOut={() => hoverFalse() }>
                <Link href={"/checkout"} id='link'>
                <ShoppingCartIcon className='navbar_shop_icon' />
                <div className='relative'>
                    <div className='navbar_cart_items'>
                        {cart}
                    </div>
                </div>
                    <div className='navbar_cart'>
                        Carrello
                    </div>
                </Link>
                {onHover && 
                    <div className='navbar_cart_container'> 
                        <div className='navbar_cart_div'> 
                        <motion.div initial={{x: -500 }} animate={{x: 1400 }}  transition={{  duration: .0 }} 
                            className='navbar_cart_wrapper'>
                            <div>
                                <div className='navbar_cart_hover'>
                                    Carrello ( {cart} )                                   
                                </div>                        
                                <CartItems />
                            </div>
                        </motion.div>
                        </div>
                    </div>
                }
            </div>
        </div>
        </div>
  )
}

export default NavbarTop
