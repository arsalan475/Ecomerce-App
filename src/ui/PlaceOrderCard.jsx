import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder } from '../features/order/order.slice'
import { nanoid } from '@reduxjs/toolkit'
import { json, useNavigate } from 'react-router-dom'
import products from '../data/product_details'
import { makeCartEmpty } from '../features/cart/cart.slice'
import { setItemsInLocalStorage } from '../hooks/useLocalStorage'

function PlaceOrderCard({data}) {

  const currProduct = data[data.length - 1]

console.log(data)
  const date = new Date(currProduct.time).toDateString();
  const alldata = useSelector(({order}) => order.orders )

  
  
const dispatch = useDispatch()
const id = nanoid(20)
const navigate = useNavigate()

function handleConfirmOrder(){
  dispatch(confirmOrder({
    id:currProduct.orderId,
    trackingId:id,
    status:'pending'   
  }))
  dispatch(makeCartEmpty())
  
  
}




  return (
    <div className='bg-slate-100 capitalize flex flex-col gap-4 items-center py-2 w-full'>
    <div className=' flex gap-4 text-center justify-center text-xs flex-wrap'>
       
       {currProduct.products.map((product) => <div key={product.id}>
            <div className='w-24 h-20'>
            <img className='w-full h-16' src={product.image} alt="" />
            <span>{product.title}</span> 
                </div>       
        </div>)
}
</div>
<div className='bg-sky-700 text-white w-full text-center flex justify-around gap-2 py-4 text-[10px]'>
        <div className=' w-1/2 flex flex-col'>
           <div>
             <span>total Products</span> : <span>{currProduct.products.length}</span>
            </div>

            <div>
            <span>total charges</span> : <span>{currProduct.totalCharges}</span>
            </div>
        </div>
        
        {currProduct.trackingId && <div className=' w-1/2 flex flex-col justify-between text-[10px]'>
           <div> <span>tracking Id</span> : <span>{currProduct.trackingId}</span></div>
           <div><span>date</span> : <span>{date}</span></div>
        </div> }
    </div>
{currProduct.trackingId != null || <div className='w-full font-semibold'>
<Button handleOnClick={handleConfirmOrder} text='text-slate-800' justify='justify-end' bg='bg-white'>confirm Order</Button>
</div>}
    </div>
  )
}

export default PlaceOrderCard