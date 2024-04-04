"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Checkout from '@/components/Checkout'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  )
}

export default page
