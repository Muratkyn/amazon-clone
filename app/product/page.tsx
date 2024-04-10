"use client"

import React from 'react'
import SingleProduct from '@/components/products/SingleProduct'
import Sidebar from '@/components/products/Sidebar'
import "./page.css"

const page = () => {
    
  return (
      <div className='product_page_container'>
        <Sidebar />
        <SingleProduct />
      </div>
  )
}

export default page
