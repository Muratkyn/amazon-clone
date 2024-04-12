"use client"

import React from 'react'
import NavbarTop from './navbarTop/NavbarTop'
import NavbarMenu from './navbarMenu/NavbarMenu'

const Navbar = () => {

  return (
    <header className='min-w-[1000px]'>
      <NavbarTop />
      <NavbarMenu />
    </header>
  )
}

export default Navbar
