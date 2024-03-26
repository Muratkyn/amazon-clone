import { PRODUCTS } from '@/Products'
import React, {useState} from 'react'


const ProductPage = () => {
 const [items, setItems] = useState(PRODUCTS)

  return (
    <div>
      <div>
        {items.map((product) => (
          <div className='h-[420px] bg-white z-30 m-3 '>
            <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
              {product.id}
            </div>
            <div className='h-[300px] m-4'>
              <img className='h-[100%] w-[100%] object-cover cursor-pointer' src={product.productImage} alt="" />
              </div>
            <div className='text-xs xl:text-sm text-blue-500 ml-4 hover:text-orange-500 cursor-pointer'>
              {product.productName}
            </div>
         
        </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
