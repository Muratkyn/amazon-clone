"use client"

import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Checkout from '@/components/checkout/Checkout'
import Footer from '@/components/footer/Footer'

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
