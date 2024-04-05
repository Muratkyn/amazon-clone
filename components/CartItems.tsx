import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Rootstate } from '@/redux/store'
import { removeFromCart, incrementCart, decrementCart } from '@/redux/CartSlice'
import Link from 'next/link'

const CartItems = () => {
    const items = useSelector((state:Rootstate) => state.cart.products)
    const itemsNumber = useSelector((state:Rootstate) => state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => state.cart.products.reduce((subtotal, product) => 
    subtotal + (product.price * product.quantity), 0
    ))
    const dispatch = useDispatch()
  return (
    <div className='w-[480px]'>
        {itemsNumber > 0 ?          
                        items.map((item) => {
                          return (
                            <div key={item.id} >
                                <div className='grid grid-cols-4 items-center p-2 ml-4 text-black  border-y-2'>
                                        <div>    
                                            <img className='p-4 w-[100px]' src={item.img} alt="small" />
                                        </div>
                                        <div className='content-start w-[100px]'>
                                            <div className='text-blue-500 w-[150px]'>
                                            <h1 className='hover:text-orange-500'>{item.productName}</h1> 
                                            <p className=' rounded p-1 items-center text-xs text-black'>({item.options})</p>
                                            </div>
                                            <div className='grid grid-cols-4 mt-2 mb-2'>
                                                <div className='text-sm bg-gray-50 border border-solid border-grey shadow-lg rounded pl-3 hover:bg-slate-100 cursor-pointer'
                                                onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                                                <div className='text-sm bg-gray-50 border border-solid border-grey shadow-lg pr-1.5 hover:bg-slate-100 rounded cursor-pointer text-right'>{item.quantity}</div>
                                                <div className='text-sm bg-gray-50 border border-solid border-grey shadow-lg rounded pl-2 hover:bg-slate-100 cursor-pointer'
                                                onClick={()=> dispatch(incrementCart(item.id))}>+</div> 
                                                <div className='flex flex-col items-end'>
                                            </div>                                                                                                                                   
                                            </div>   
                                        </div>
                                        <div className='flex flex-row justify-end font-semibold'>
                                            <h1>{item.price}€</h1>  
                                        </div>
                                        <button className='flex self-start justify-end mr-2 font-bold col-span-1' onClick={() => dispatch(removeFromCart(item.id))}>X</button>

                                </div>
                            </div>
                          )
                        }): 
                            <div>
                            <div className='w-auto h-auto flex flex-row'>
                                <div>
                                <img className='w-[200px] h-[200px] p-10' src="./images/empty-cart_.svg" alt="empty_cart" />
                                </div>
                                <div className='p-6 mt-6'>
                                <Link href={"/product"}>
                                <p className='text-sm font-semibold text-cyan-700 mb-4'>Il tuo carrello Amazon e' vuoto!</p>
                                <button className='bg-white shadow-lg border p-1.5 mr-2 rounded-lg text-sm hover:bg-gray-100 cursor-pointer text-black'>Inizia qui.</button>
                                </Link>
                                </div>
                            </div>
                            </div>                          
        }
        {
         itemsNumber > 0 &&
            <div className='text-black text-md flex flex-row justify-center p-8 ml-16 '>Totale provissorio ({itemsNumber}): 
                <span className='font-semibold'>{subtotal}€</span>
            </div>
        }
    </div>
  )
}

export default CartItems
