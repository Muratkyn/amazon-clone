"use client"

import React from 'react'
import NavbarTop from './NavbarTop'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {

  return (
    <header className='min-w-[1000px]'>
      <NavbarTop />
      <NavbarMenu />
    </header>
  )
}

export default Navbar
