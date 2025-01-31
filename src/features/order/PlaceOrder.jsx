import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllData } from '../../utils/helpers'
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'
import PlaceOrderCard from '../../ui/PlaceOrderCard'

function PlaceOrder() {
  
    const {id} = useParams()
    const data = useSelector(({order}) => order.orders )
     console.log
    
    return (
        <PlaceOrderCard data={data} />
  )
}

export default PlaceOrder