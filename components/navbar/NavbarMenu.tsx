import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState  } from 'react'
import "./NavbarMenu.css"

const NavbarMenu = () => {
    const [navbarOpen, setNavbarOen] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const toggleNavbar = () => {
        setNavbarOen(!navbarOpen)
    }
    const hoverTrue = () => {
        setOnHover(true)
    }
    const hoverFalse = () => {
        setOnHover(false)
    }
  return (
    <div className='navbarMenu_container '>
            <Bars3Icon onClick={() => toggleNavbar()} className='h-[28px]'/>
            {navbarOpen && 
            <div onClick={() => toggleNavbar()}>
                <div className='navbarMenu_open_container'> 
                  <motion.div initial={{x: -500, opacity: 0}} animate={{x: 0 , opacity:1}} transition={{duration: .4}} 
                   className='navbarMenu_open_div inherit_bg'>
                    <div className='navbarMenu_icon_div'>
                        <UserCircleIcon className='icon_size'/>
                        Ciao, accedi        
                        <span className='navbarMenu_icon_x'>    
                            <XMarkIcon onClick={() => toggleNavbar()} className='icon_size'/>
                        </span>
                    </div>
                    <div className=' size_full overflow-scroll'>
                    <div className='navbarMenu_groups'>
                        <h2 className='text-lg font-bold'>Di tendenza</h2>
                        <p>Bestseller</p>
                        <p>Novita'</p>
                        <p>I prodotti del momento</p>
                    </div>
                    <div className='navbarMenu_groups'>
                        <h2 className='text-lg font-bold'>Scegli per Categoria</h2>
                        <p>Amazon Primew Video</p>
                        <p>Amazon Mucis</p>
                        <p>Amazon Photos</p>
                        <p>Echo e Alexa</p>
                        <p>Amazon Fire Tv</p>
                        <p>E-reader eBook Kindle</p>
                        <p>App Store per Android</p>
                        <p>Audolibri Audible</p>
                    </div>
                    <div className='navbarMenu_groups'>
                        <h2 className='text-lg font-bold'>Aiuta e impostazioni</h2>
                        <p>Il mio Account</p>
                        <p>Servizio Clienti</p>
                        <p>Accedi</p>
                    </div>
                    </div>
                  </motion.div>
                </div>
            </div>
            }
           <Link className='font-bold' href="/product">
            Tutte</Link>
            <p>Bestseller</p>
            <p>Novita'</p>
            <p>Amazon</p>
            <p>Offerte</p>
            <p>Prime</p>
            <p>Musica</p>
            <p>Libri</p>
            <p>Moda</p>
            <p>Domestici</p>
            <p>Animali</p>
            <p>Auto</p>
            <div className='navbarMenu_promo'>
                <img className='navbarMenu_play_icon' src="./images/play.svg" alt="img" />
                <Link 
                    href={"https://www.primevideo.com/-/it/offers/nonprimehomepage/ref=atv_hom_offers_c_9zZ8D2_hom"}>
                    <p className='navbarMenu_prime'>AMAZON PRIME <span 
                       className='text-white text-sm'>| Iscriviti, gratis per 30 giorni</span></p>
                </Link>
            </div> 
        </div>
  )
}

export default NavbarMenu
