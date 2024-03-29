import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '@/redux/store'
import Link from 'next/link'
import { removeFromCart, incrementCart, decrementCart } from '@/redux/CartSlice'


const Checkout = () => {
    const items = useSelector((state:Rootstate) => state.cart.products)
    const itemsNumber = useSelector((state:Rootstate) => state.cart.productsNumber)
    const subtotal = useSelector((state:Rootstate) => state.cart.products.reduce((subtotal, product) => 
    subtotal + (product.price * product.quantity), 0
    ))
    const dispatch = useDispatch()
    
  return (
    <div>
      <div className='h-screen bg-amazonColors-backgroundColor overflow-scroll'>
        <div className='min-w[700px] max-w-[1000px] h-[140px] m-auto pt-8 flex items-center justify-center'>
          <div className='bg-white w-[90%] h-[130px] flex flex-row justify-center items-center gap-20'>
            <Link href={"/product"}><button className='text-sm border border-solid border-grey rounded-lg p-1.5 shadow-lg hover:bg-slate-100'>Scopri di piu</button></Link>
            <div><button className='text-sm'><span className='font-bold'>Metti da parte il budget per i tuoi futuri acquisti </span>Amazon Ricarica</button></div>
            <div><img src='./images/amazon-cart-image.jpg'></img></div>
          </div>
        </div>
          <div className='min-w[1000px] max-w-[1500px] h-auto m-auto pt-8'>
              <div className='grid grid-cols-8 gap-10 mb-12'>
                {/* Products */}
                  <div className='col-span-6 bg-white'>
                      <div className='text-2xl xl:text-3xl mt-4 pl-10'>Carrello</div>
                      <div className='flex flex-col items-end mr-8'>
                        <p>prezzo</p>
                      </div>
                      {
                        items.map((item) => {
                          return (
                            <div key={item.id}>
                                <div className='grid grid-cols-12 divide-y divide-gray-400'>
                                    <div className='col-span-10 grid grid-cols-8 divide-y divide-gray-400'>
                                        <div className='col-span-2'> 
                                            <img className='p-16' src={item.img} alt="small" />
                                        </div>
                                        <div className='col-span-6 p-10 '> 
                                            <div className='font-medium mt-2 text-xs xl:text-xl text-blue-500 cursor-pointer'>
                                                {item.productName}
                                            </div>
                                            <div className='max-w-[150px] mb-2 mt-2'>
                                              <p className='text-sm mr-3'>({item.options})</p>
                                              <div className='flex mt-2'>
                                              <p className='bg-yellow-300 max-w[20px] rounded p-1 items-center font-semibold text-sm'>✅ Amazon's choice</p>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-3 w-[100px]'>
                                                <div className='text-sm xl:text-xl bg-white border border-solid border-grey shadow-lg rounded pl-1.5 hover:bg-slate-100 cursor-pointer'
                                                onClick={()=> dispatch(decrementCart(item.id))}>-</div>
                                                <div className='text-sm xl:text-xl bg-white border border-solid border-grey shadow-lg pr-1.5 hover:bg-slate-100 rounded cursor-pointer text-right'>{item.quantity}</div>
                                                <div className='text-sm xl:text-xl bg-white border border-solid border-grey shadow-lg rounded pl-1.5 hover:bg-slate-100 cursor-pointer'
                                                onClick={()=> dispatch(incrementCart(item.id))}>+</div> 
                                                                                            
                                            </div>
                                            <div className='mt-4 gap-2 flex'>
                                                <button className='text-xs border border-solid border-grey rounded-lg p-1.5 shadow-lg hover:bg-slate-100' 
                                                onClick={() => dispatch(removeFromCart(item.id))}>Rimuovi</button>  
                                                <button className='text-xs border border-solid border-grey rounded-lg p-1.5 shadow-lg hover:bg-slate-100'>Salva per Dopo</button>                                      
                                                <button className='text-xs border border-solid border-grey rounded-lg p-1.5 shadow-lg hover:bg-slate-100'>Condividi</button>                                      
                                            <Link href={"/product"}>
                                                <button className='text-xs border border-solid border-grey rounded-lg p-1.5 shadow-lg hover:bg-slate-100'>Visualiiza gli altri articoli simili</button>                                      
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
                      }
                      <div className='text-lg xl:text-xl text-right mb-2 mr-10 '>Totale provissorio ({itemsNumber}): <span 
                      className='font-semibold'>{subtotal}€</span></div>
                  </div>
                <div className='col-span bg-white rounded h-[280px] w-[300px] p-10'>
                    <div className='text-xs text-green-800 mb-2'> ✅ Benvenuto in Amazon!<span 
                    className='font-bold'>Spedizione GRATUITA</span> sul tuo primo ordine. Selezionare questa opzione al momento della conferma dell’ordine. Dettagli
                     </div>
                    <div className='text-base xl:text-lg mb-4 '>Totale provissorio({itemsNumber} articoli): <span 
                      className='font-semibold'>{subtotal}€</span></div>
                      <Link href={"/payment"}>
                      <button className='bg-yellow-300 p-1.5 rounded-xl w-[100%] mt-2 text-sm hover:bg-yellow-400 hover:border'>Procedi all'ordine</button>
                      </Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Checkout
