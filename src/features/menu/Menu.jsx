import React from 'react'
import ShopingCard from '../../ui/ShopingCard'
import { useNavigate } from 'react-router-dom'
import products from '../../data/product_details'

function Menu() {

const navigate = useNavigate()


  const handleProducOverView = (product) => {
   navigate(`/product-overview/${product.id}`)
  }

  return (
    <div className='flex flex-wrap justify-center  gap-10  w-full'>
     {products.map((prod)=> <ShopingCard key={prod.id} product={prod} handleProducOverView={handleProducOverView}/> 
 )}    </div>
  )
}

export default Menu