import React from 'react'
import { motion } from 'framer-motion'
import { UserCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'
import "./NavbarMenuOpen.css"
import { NavbarProp } from '@/types/type'

const NavbarMenuOpen = ({toggleNavbar}: NavbarProp) => {
  return (
    <div onClick={() => toggleNavbar()}>
      <div className='navbarMenuOpen__container'> 
        <motion.div 
          initial={{x: -500, opacity: 0}} 
          animate={{x: 0 , opacity:1}} 
          transition={{duration: .4}} 
          className='navbarMenuOpen__div inherit__bg'>
          <div className='navbarMenuOpen__icon--div'>
            <UserCircleIcon className='icon__size'/>
            Ciao, accedi        
            <span className='navbarMenuOpen__icon--x'>    
              <XMarkIcon 
               onClick={() => toggleNavbar()} 
               className='icon__size'/>
            </span>
          </div>
          <div className='size__full overflow-scroll'>
            <div className='navbarMenuOpen__groups'>
              <h2 className='text__bold'>Di tendenza</h2>
              <p>Bestseller</p>
              <p>Novita'</p>
              <p>I prodotti del momento</p>
            </div>
            <div className='navbarMenuOpen__groups'>
              <h2 className='text__bold'>Scegli per Categoria</h2>
              <p>Amazon Primew Video</p>
              <p>Amazon Mucis</p>
              <p>Amazon Photos</p>
              <p>Echo e Alexa</p>
              <p>Amazon Fire Tv</p>
              <p>E-reader eBook Kindle</p>
              <p>App Store per Android</p>
              <p>Audolibri Audible</p>
            </div>
            <div className='navbarMenuOpen__groups'>
              <h2 className='text__bold'>Aiuta e impostazioni</h2>
              <p>Il mio Account</p>
              <p>Servizio Clienti</p>
              <p>Accedi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NavbarMenuOpen
