"use client"

import React, { useState }from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { MapPinIcon } from '@heroicons/react/16/solid'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { UserCircleIcon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/16/solid'
import {motion} from "framer-motion" 
import { useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import Search from './Search'
import Link from 'next/link'

const Navbar = () => {

    const cart = useSelector((state:Rootstate) => state.cart.productsNumber )
    const [navbarOpen, setNavbarOen] = useState(false)
    const toggleNavbar = () => {
        setNavbarOen(!navbarOpen)
    }

  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonColors-default text-white h-[60px]'>
            { /* Left */}
            <div className='flex items-center p- m-4'>
                <Link href={"/"}>
                    <img className='h-[35px] w-[110px] m-2 ' src='../images/amazon.png'></img>
                </Link>
                <div className='pr-4 pl-4 reltive'>
                    <div className='text-xs xl:text-sm text-gray-300 '>
                        In consegna a Monza
                    </div>
                    <div className='text-sm xl:text-base font-bold flex items-center '>
                        <MapPinIcon className='h-[15px]'/>
                        Aggiorna posizione
                    </div>
                </div>
            </div>
            { /* Middle */}
            <div className='flex grow items-center relative'>
                <Search />
            </div>
            { /* Right */}    
            <div className='flex items-center m-4'>
                <div className='pr-4 pl-1 ml-10'>
                    <div className='text-xs xl:text-sm text-gray-300'>
                        Ciao, accedi
                    </div>
                    <div className='text-sm xl:text-base font-bold'>
                        Account e liste
                    </div>
                </div>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm text-gray-300'>
                        Resi
                    </div>
                    <div className='text-sm xl:text-base font-bold'>
                        e ordini
                    </div>
                </div>
                <div >
                    <Link href={"/checkout"} className='flex pr-3 pl-3'>
                    <ShoppingCartIcon className='h-[50px] relative' />
                    <div className='relative'>
                        <div className='absolute font-bold right-[16px] top-[8px] text-orange-500'>
                            {cart}
                        </div>
                    </div>
                        <div className='mt-5 text-xs xl:text-sm font-bold'>
                            Carrello
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center bg-amazonColors-lightBlue text-white space-x-5 text-xs xl:text-sm p-2 pl-1 gap-1 cursor-pointer md:text-xs lg:text-xs '>
            <Bars3Icon onClick={() => toggleNavbar()} className='h-[28px]'/>
            {navbarOpen && 
            <div onClick={() => toggleNavbar()}>
                <div className='w-full h-screen top-0 left-0 text-black bg-opacity-60  bg-amazonColors-lightBlue flex flex-column fixed z-50'> 
                  <motion.div initial={{x: -500, opacity: 0}} animate={{x: 0 , opacity:1}} transition={{duration: .4}} className='w-[380px] h-full bg-white '>
                    <div className='flex gap-2 w-full flex-column justify-start items-center text-white bg-amazonColors-lightBlue px-8 py-2 text-lg font-bold '>
                        <UserCircleIcon className='w-[30px] h-[30px]'/>
                        Ciao, accedi        
                        <span className='w-[10px] flex flex-col justify-end ml-36'>    
                            <XMarkIcon onClick={() => toggleNavbar()} className='text-white w-[40px] h-[50px]'/>
                        </span>
                    </div>
                    <div className=' w-full h-screen overflow-scroll'>
                    <div className='p-8 gap-6 flex flex-col border border-solid border-y-10'>
                        <h2 className='text-lg font-bold'>Di tendenza</h2>
                        <p>Bestseller</p>
                        <p>Novita'</p>
                        <p>I prodotti del momento</p>
                    </div>
                    <div className='p-8 gap-6 flex flex-col border border-solid border-y-10'>
                        <h2 className='text-lg font-bold'>Dispostivi e contenuti digitali</h2>
                        <p>Amazon Primew Video</p>
                        <p>Amazon Mucis</p>
                        <p>Amazon Photos</p>
                        <p>Echo e Alexa</p>
                        <p>Amazon Fire Tv</p>
                        <p>E-reader eBook Kindle</p>
                        <p>App Store per Android</p>
                        <p>Audolibri Audible</p>
                    </div>
                    <div className='p-8 gap-6 flex flex-col border border-solid border-y-10'>
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
                    <div className='p-8 gap-6 flex flex-col border border-solid border-y-10 mb-8'>
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
           <Link className="justify-start flex" href="/product">
            Tutte</Link>
            <div>Bestseller</div>
            <div>Novita</div>
            <div>Amazon Basics</div>
            <div>Offerte</div>
            <div>Prime</div>
            <div>Musica</div>
            <div>Libri</div>
            <div>Moda</div>
            <div>Informatica</div>
            <div>Elettronica</div>
            <div>Casa e cucina</div>
            <div>Giochi e giocattoli</div>
            <div>Videogiochi</div>
            <div>Supermercato</div>
            <div>Audible</div>
            <div className='flex items-center'>
                <img className='w-[30px] h-[30px] ml-4' src="./images/play.svg" alt="" />
                <Link href={"https://www.primevideo.com/-/it/offers/nonprimehomepage/ref=atv_hom_offers_c_9zZ8D2_hom"}>
                <p className='pl-2 text-cyan-500 text-md font-bold'>AMAZON PRIME <span className='text-white text-sm'>| Iscriviti, gratis per 30 giorni</span></p>
                </Link>
            </div>
            
        </div>
    </header>
  )
}

export default Navbar
