import React from 'react'
import CheckOut from './CheckOut'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlaceOrderCard from '../../ui/PlaceOrderCard'

function Order() {


      const data = useSelector(({order}) => order.orders )
      
      return (
        
        
        <div className='w-full'>
      <Outlet/>
    </div>
  )
}

export default Order