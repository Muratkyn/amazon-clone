"use client"

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import ProductPage from '@/components/ProductPage'
import { ProductProps } from '@/type'
import { PRODUCTS } from '@/Products'

interface Props {
  productData: ProductProps
}

const page = () => {
    const [items, setItems] = useState(PRODUCTS)
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-6 m-8 p-10 bg-amazonColors-backgroundColor h-[1200px]'>
        <div>
            <p className='font-bold text-sm '>Idoneo all spedizione gratuita</p>
                <div className='flex mb-4'>
                    <input type="checkbox" className='m-1' />
                    <p className='text-sm'>Spedizione gratuita con Amazon  </p>
                </div>
            <p className='font-bold text-sm '>Prodotti piu sostenibili</p>
                <div className='flex mb-4'>
                    <input type="checkbox" className='m-1' />
                    <p className='text-sm'>Climate Pedge friendly</p>
                </div>
            <p className='font-bold text-sm '>Recensione del Cliente</p>
                <div className='p-2'>
                </div>
            <p className='font-bold text-sm mt-2'>Marca</p>
                <div className='mb-4 flex flex-col'>
                    <div className='flex items-center'>
                        <input type="checkbox" className='m-1' />
                        <p className='text-sm'>HP</p>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" className='m-1' />
                        <p className='text-sm'>Apple</p>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" className='m-1' />
                        <p className='text-sm'>Logitech</p>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" className='m-1' />
                        <p className='text-sm'>Samsung</p>
                    </div><div className='flex items-center'>
                        <input type="checkbox" className='m-1' />
                        <p className='text-sm'>Lenovo</p>
                    </div>
                </div>
        </div>
         
                <ProductPage />
         
      </div>
    </div>
  )
}

export default page
