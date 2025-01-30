import React from 'react'
import CartProduct from '../../ui/CartProduct'
import { useSelector } from 'react-redux'
import products from '../../data/product_details'
import Button from '../../ui/Button'
import CheckOut from '../order/CheckOut'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()


function handleCheckOut() {
  navigate('/order/check-out')
}


// selecting cart state form cart slice

  const cartItems = useSelector(({cart})=> cart.items)    // cartItmes is return me the array of objects with cart details 


  
  // finding products  with cartItmes id which is retuning 2d array thats why we need to use flat 

const product = cartItems.map(item => products.filter(prod => prod.id === item.id)).flat()



if(!cartItems.length) return   <div className='w-full flex justify-center text-lg sm:text-xl md:text-3xl max-md:items-center gap-4'>
  <div className='flex flex-col gap-4 capitalize text-slate-500 font-semibold tracking-wider text-center'>
    <span>No Items Availabe In Cart</span>
  <span>
    Add Products In Cart
    </span>
  </div>
  </div>


  return (
    <div className='w-full    flex flex-col max-md:items-center gap-4 text-xs sm:text-sm items-center'>
      {product.map((items,i)=> <CartProduct key={items.id} product={items} cartItems={cartItems[i]} />)}
     <Button handleOnClick={handleCheckOut} justify={'justify-end'} bg={'bg-green-400'} hover={'hover:bg-green-500'}>Check Out</Button>
    </div>
  )
}

export default Cart