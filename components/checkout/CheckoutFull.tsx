import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import { decrementCart, incrementCart, removeFromCart } from '@/redux/CartSlice'

const CheckoutItems = () => {
  const items = useSelector((state:Rootstate) => state.cart.products)
    const itemsNumber = useSelector((state:Rootstate) => state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => state.cart.products.reduce((subtotal, product) => 
    subtotal + (product.price * product.quantity), 0
    ))
    const dispatch = useDispatch()
  return (
    
    items.map((item) => {
        return (
          <div key={item.id}>
              <div className='grid grid-cols-12 divide-y divide-gray-400'>
                  <div className='col-span-10 grid grid-cols-8 divide-y divide-gray-400'>
                      <div className='col-span-2'> 
                          <img className='p-16' src={item.img} alt="small" />
                      </div>
                      <div className='col-span-6 p-10 '> 
                          <div className='font-medium mt-2 text-xs xl:text-xl text-blue-500 cursor-pointer hover:text-orange-500'>
                              {item.productName}
                          </div>
                          <div className='max-w-[150px] mb-2 mt-2'>
                            <p className='text-sm mr-3'>({item.options})</p>
                            <div className='flex mt-2'>
                            <p className='bg-yellow-300 max-w[20px] rounded p-1 items-center font-semibold text-sm'>✅ Amazon's choice</p>
                            </div>
                          </div>
                          <div className='grid grid-cols-3 w-[100px]'>
                              <div className='text-sm xl:text-xl bg-white border border-solid border-grey shadow-lg rounded pl-3 hover:bg-slate-100 cursor-pointer'
                              onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                              <div className='text-sm xl:text-xl bg-white border border-solid border-grey shadow-lg pr-1.5 hover:bg-slate-100 rounded cursor-pointer text-right'>{item.quantity}</div>
                              <div className='text-sm xl:text-xl bg-white border border-solid border-grey shadow-lg rounded pl-2 hover:bg-slate-100 cursor-pointer'
                              onClick={()=> dispatch(incrementCart(item.id))}>+</div>                                                                                            
                          </div>
                          <div className='mt-4 gap-2 flex'>
                              <button className='btn_checkout' 
                              onClick={() => dispatch(removeFromCart(item.id))}>Rimuovi</button>  
                              <button className='btn_checkout'>Salva per Dopo</button>                                      
                              <button className='btn_checkout'>Condividi</button>                                      
                          <Link href={"/product"}>
                              <button className='btn_checkout'>Visualiiza gli altri articoli simili</button>                                      
                          </Link>
                          </div>
                      </div>
                  </div>
                  <div className='col-span-2 p-10 flex flex-row justify-end'> 
                      <div className='text-lg xl:text-xl mt-2 font-bold '>{item.price}€</div>
                  </div>
              </div>
          </div>
        )
      })
  )
}

export default CheckoutItems
