
import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/product_details'
import OverViewCard from './OverViewCard';
import { useDispatch, useSelector } from 'react-redux';
import { getDataById } from '../utils/helpers';
import { editCartDetails } from '../features/cart/cart.slice';

function ProductOverview() {

  const dispatch = useDispatch()
const {id} = useParams()

const filterData = () => getDataById(products,id)

 

  return (
    <div className='px-2 w-full lg:w-2/3'>
        { filterData().map(product => <OverViewCard key={product.id}  product={product} btnText={'Add To Cart'}/>) }
    </div>
  )
}

export default ProductOverview