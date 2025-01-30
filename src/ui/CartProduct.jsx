import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem, controlQuantity } from '../features/cart/cart.slice'
import { useNavigate } from 'react-router-dom'

function CartProduct({product,cartItems}) {

const dispatch = useDispatch()
const navigate = useNavigate()

function handleOnChange(e) {

  if(e.target.value < 1) return

dispatch(controlQuantity({value:+e.target.value,id:product.id}))
}

function handleOnClick(){
navigate(`/edit-product-details/${product.id}`)

}

function handleDeleteItem(){
  dispatch(deleteCartItem({id:product.id}));
}


  return (
    <div className='w-full md:w-2/3 h-20 bg-slate-100 flex shadow-lg text-slate-700  cursor-pointer hover:bg-slate-200'
 
    >
        <div className='w-20 h-full bg-red-400'>
        <img  className='h-full' src={product.image} alt="" />
        </div>
        <div className='cart-Detail w-full flex justify-between px-4 py-2'
           onClick={handleOnClick}
        >
            <div className='  flex flex-col'>

            <span>{product.title}</span>
            <span>{product.description  }</span>
            <span>${product.price  }</span>
          
            </div>

       
        </div>
    
            <div className='flex flex-col text-[10px] sm:text-sm gap-2 sm:gap-4 w-[30%] py-2'>
              <div >

                <span>Qantity</span> : <span><input type="number" value={cartItems.quantity}  onChange={(e)=>handleOnChange(e)} className='w-8 ' placeholder='1' /></span>
              </div>
                <span className='hover:underline hover:opacity-80' onClick={handleDeleteItem}>Remove</span>
            </div>
    </div>
  )
}

export default CartProduct