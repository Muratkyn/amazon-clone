"use client"

import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import SingleProduct from '@/components/product/SingleProduct'
import Footer from '@/components/footer/Footer'
import Sidebar from '@/components/product/Sidebar'
import "./page.css"


const page = () => {
    
  return (
    <div>
      <Navbar />
      <div className='product_page_container'>
        <Sidebar />
        <SingleProduct />
      </div>
      <Footer />
    </div>
  )
}

export default page
