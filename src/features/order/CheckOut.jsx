import React from 'react'
import { getAllData, getAllIdsOnly } from '../../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { placeOrder } from './order.slice'


function CheckOut() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orderId = nanoid(12)

  const cartItems = useSelector(({cart})=> cart.items)
  
  const products = getAllData(cartItems)

  const productsOrderIds = getAllIdsOnly(cartItems)

  
  const total = products.map((product)=>  product.price * product.quantity).reduce((acc,curr)=> acc + curr,0) 
  
  const deliveryCharges = total / products.length

  function handlePlaceOrder() {
   
    dispatch(placeOrder({
      orderId,
      products,
      totalCharges:total + deliveryCharges,
      trackingId:null,
      time:null,
      status:'processing'
      
    }))
    navigate(`/order/place-order`)
  }




  return (
    <div className='w-full flex flex-col items-center gap-2'>
      {products.map(product => {
      return   <div key={product.id} className='w-full md:w-2/3 h-16 sm:h-24 text-xs sm:text-lg bg-slate-100 flex shadow-lg
       text-slate-700  cursor-pointer hover:bg-slate-200 '
 
      >
          <div className='w-20 h-full bg-red-400'>
          <img  className='h-full' src={product.image} alt="" />
          </div>
          <div className='cart-Detail w-full flex justify-between px-4 py-2'
             
          >
              <div className='  flex flex-col'>
  
              <span>{product.title}</span>
              <span>{product.description  }</span>
              <span>${product.price}</span>
            
              </div>
  
         
          </div>

          <div className='flex flex-col  sm:gap-4 w-[30%] py-2'>
              <div>

                <span>Qantity</span> : <span><input type="number" value={product.quantity}  className='w-8 '  disabled/></span>
              </div>
               
            </div>
        </div>
        })}
{cartItems.length > 0 && <div className='w-full md:w-2/3'   >


        <div className='bg-slate-500 w-full  text-sm sm:text-lg text-white  flex flex-col gap-2 capitalize items-center py-2 shadow-xl'>
          <div>
            <span>Delivery Charges</span> : <span className='font-semibold'>{deliveryCharges}</span>
          </div>
          <div>
            <span>total price</span> : <span className='font-semibold'>{total}</span>
          </div>
          <div>
            <span>total price + delivery Charges</span> : <span className='font-semibold'>{total + deliveryCharges}</span>
          </div>
        </div>
        <div className='max-sm:text-xs'>
          <Button handleOnClick={handlePlaceOrder} justify='justify-end' bg='bg-sky-500' hover='hover:bg-sky-600' text='text-white'>Place Order</Button>
        </div>
        </div>}
    </div>
  )
}

export default CheckOut