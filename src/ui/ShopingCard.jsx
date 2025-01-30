import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cart.slice'

function ShopingCard({product,handleProducOverView}) {
    
    const dispatch = useDispatch()




 function handleAddToCart(){
    dispatch(addToCart({...product,quantity:1}))
 }


  return (
    <div  className='w-1/3 sm:w-1/5  ring ring-slate-600 h-40 sm:h-56 flex items-center flex-col lg:h-[15rem] shadow-2xl rounded-md p-1 *:
    '  >
        <div className='   overflow-hidden text-xs  w-full h-full  cursor-pointer   ' onClick={()=>handleProducOverView(product)}>
        <div className='w-full h-1/2 sm:h-[55%] border-b-2 border-slate-200'><img src={product.image} className='w-full h-full  rounded-md ' alt="product-img" /></div>
        <div className='details flex flex-col justify-between w-full'>
           <span className='font-semibold py-1 lg:text-lg'>{product.title}</span>
            <div className='flex justify-between max-sm:flex-col '>
            <div className='pricing  bg-slate-900  w-full sm:w-1/2 md:w-2/3  flex justify-evenly text-white text-[10px] sm:text-xs md:text-lg tracking-wide items-center rounded-md'>
                <span>Price</span><span className='font-semibold'>{product.price}</span>
            </div>

            <div className='flex sm:flex-col justify-between  text-[10px] sm:text-xs md:text-sm'>

            <div>
                <span >QT</span> : <span className='font-semibold'>{product.quantityAvailable}</span>
            </div>

            <div >
                <span className='text-[8px]'>⭐⭐⭐⭐⭐</span>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div onClick={handleAddToCart} className='w-full py-1 flex justify-center lg:text-lg  border-2 border-black text-black font-semibold rounded-md
        hover:bg-slate-100 hover:text-slate-600 cursor-pointer
        
        '>
            <button >Add to Cart</button>
        </div>
    </div>
  )
}

export default ShopingCard