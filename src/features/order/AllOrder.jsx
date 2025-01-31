import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getItemsInLocalStorage } from '../../hooks/useLocalStorage'

function AllOrder() {
  const navigate = useNavigate()
    const data = getItemsInLocalStorage('data')
      const Products = data.map((data)=> data.products )
    
  

 
    // Products.forEach((product)=>{
    //  console.log(product.title)
    // })
  return (<div className='flex flex-col gap-2'>

{Products.map((product,i)=>{
 
return <div key={data[i].orderId} className='flex  flex-col items-center justify-center bg-slate-100 py-2 gap-4 text-xs sm:text-sm'>

<div className='w-full px-1 sm:w-5/6  flex justify-between text-[8px] sm:text-[10px] md:text-xs'>

<div className='flex flex-col w-full '>
  <span>Order Id : {data[i].orderId}</span>
  <span>Tracking Id : {data[i].trackingId}</span>
  </div>

  <div className='flex flex-col gap-2    w-5/6 sm:w-1/3  text-center justify-around'>
  <span>Order Date : {new Date(data[i].time).toDateString()}</span>
  <span className='bg-white sm:py-2 rounded-md font-semibold'>Status : {data[i].status}</span>
  </div>
</div>
  <div className='flex gap-2 sm:gap-4'>
  {
      product.map((p)=> {

  
      return <div key={p.id}>
      <div className='w-full text-[8px] sm:text-xs'>
       <span>{p.title}</span>
       <img className='w-10 sm:w-20 cursor-pointer' src={p.image} alt={p.title} onClick={()=> {navigate(`/product-overview/${p.id}`)}}/>
      </div>
      
      
   
      </div>
   
     })
  }
  </div>
  
</div>

  
    }
  )}
  </div>
  )
}

export default AllOrder