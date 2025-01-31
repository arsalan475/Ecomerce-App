import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../features/cart/cart.slice'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../features/order/order.slice'
import { nanoid } from '@reduxjs/toolkit'




function OverViewCard({product ,handleOnChange= ()=>'',btnText }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orderId = nanoid(12)

  
  const total = product.price 
  
  const deliveryCharges = total / 3

  console.log(total)


  let color;
  let size;


  function handleBuyPorduct(){
    
        dispatch(placeOrder({
          orderId,
          products:[{...product,quantity:1,defaultColor:color || product.defaultColor,defaultSize:size || product.defaultSize}],
          totalCharges:total + deliveryCharges,
          trackingId:null,
          time:null,
          status:'processing'
          
        }))

        navigate(`/order/place-order`)
        console.log('clicked')

  }

  // below function works in two components by using one button component simply checking btn text and defining his role
function buttonTextProp(){

  // if button text is  back to cart then this works like backward history button and just returns

  if(btnText === 'back to cart') return navigate('/cart')

// if button text is add to cart then this works like add items to cart

   dispatch(addToCart({...product,quantity:1,defaultColor:color || product.defaultColor,defaultSize:size || product.defaultSize}))  

 
}



// below 2 functions are just for getting values without useState hook and 
// for using the value every where i reddeclared above variables colors and size in below functions

 function getColor(e) {
  color = e.target.value
}


function getSize(e) {
  size = e.target.value
}






  return (
    <div className=' ring ring-slate-100 shadow-xl text-slate-700 ring-offset-2 rounded-sm w-full  flex gap-4'>
        <div className='w-1/2  h-full '><img className='w-full  h-full rounded-lg' src={product.image} alt="product Image" /></div>
        <div className='flex flex-col gap-2  w-full '>
            <span className='font-semibold text-2xl uppercase'>{product.title}</span>
            <span className='text-lg capitalize'>{product.description}</span>
            <div className='font-thin'><span>Quantity</span> : <span>{product.quantity || product.quantityAvailable}</span></div>
            <div className='flex gap-4 uppercase font-semibold text-sm'>
               {product.sizes.map((size,i)=> <div key={size}>
                <label htmlFor={size}>{size}</label> 
                <input type="radio" value={size} onChange={(e)=> {
                  getSize(e)
                  handleOnChange({
                  size:e.target.value,
                  id:product.id
                })}} 
                name={'size'} id={size} defaultChecked={size === product.defaultSize}/>
                </div>)} 
                
            </div>

            <div className='flex gap-4 uppercase font-semibold text-xs'>
            {product.colors.map((color)=> <div key={color}>
                <label htmlFor={color}>{color}</label> 
                <input type="radio" value={color} onChange={(e)=> {
                  getColor(e)
                  handleOnChange(
                  {
                    color:e.target.value,
                    id:product.id,
                  }
                )}} 
                name={'color'} id={color} defaultChecked={color === product.defaultColor}/>
                </div>)} 

            </div>
            
           <Button handleOnClick={handleBuyPorduct} bg='bg-sky-400' hover='hover:bg-sky-500'>buy now</Button>

            {/* below button work defferent in both product over view conpmonent and edit product component */}
           <Button handleOnClick={buttonTextProp}>{btnText}</Button>
        </div>
        
    </div>
  )
}

export default OverViewCard