"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import Search from '../../search/Search'
import { motion } from 'framer-motion'
import { MapPinIcon } from '@heroicons/react/16/solid'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import CartItems from '../../main/cartItems/CartItems'
import { useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import "./NavbarTop.css"

const NavbarTop = () => {
  const cart = useSelector((state:Rootstate) => 
    state.cart.productsNumber)
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseOver = () => {
    setIsHovered(true)}
  const handleMouseOut = () => {
    setIsHovered(false)}

  return (
    <div className='navbarTop__main--container'>
      <div className='navbarTop__container'>
        <Link href={"/"}>
          <img className='navbarTop__img' 
            src='../images/amazon.png' 
            alt='img'>    
          </img>
        </Link>
        <div className='navbarTop__text--div'>
          <div className='navbarTop__text'>In consegna a Monza</div>
          <div className='navbarTop__pin--icon'>
            <MapPinIcon className='h-[15px]'/>Aggiorna posizione</div>
        </div>
      </div>
      <div className='navbarTop__search'><Search/></div>  
      <div className='navbarTop__right'>
        <div className='navbarTop__right--div'>
          <div className='navbarTop__text'>Ciao, accedi</div>
          <div className='navbarTop__text--bold'>Account e liste</div>
        </div>
        <div className='navbarTop__text--div'>
          <div className='navbarTop__text'>Resi</div>
          <div className='navbarTop__text--bold'>e ordini</div>
        </div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
         <Link href={"/checkout"} id='link'>
           <ShoppingCartIcon className='navbarTop__shop--icon' />
           <div className='relative'>
            <div className='navbarTop__cart--items'>{cart}</div>
           </div>
           <div className='navbarTop__cart'>Carrello</div>
         </Link>
        {isHovered && 
          <div className='navbarTop__cart--container'> 
            <div className='navbarTop__cart--div'> 
              <motion.div 
                initial={{x: -500 }} 
                animate={{x: 1400 }}  
                transition={{duration: .0}} 
                className='navbarTop__cart--wrapper'>
                <div className='navbarTop__cart--hover'>Carrello({cart})</div>                        
                <CartItems />
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
