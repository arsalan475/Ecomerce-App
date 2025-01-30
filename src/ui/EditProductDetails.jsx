import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import OverViewCard from './OverViewCard'
import { editCartDetails } from '../features/cart/cart.slice';
import { getDataById } from '../utils/helpers';

function EditProductDetails() {

    const {id} = useParams();
    const dispatch =  useDispatch();

    function getProduct(){

      // this component look same as product overview component but 
      // in this component data is coming from cart slice and product overview component data is coming from conatant data structure
    
        const cartItems = useSelector(({cart})=> cart.items)
        
        const product =   getDataById(cartItems,id)
        
       return product
    }





    function handleOnChange(data){
      dispatch(editCartDetails(data))
    }
    
    
      return (
        <div className='w-2/3'>
            { getProduct().map(product => <OverViewCard key={product.id} product={product} handleOnChange={handleOnChange} btnText={'back to cart'}/>) }
        </div>
      )
    
}

export default EditProductDetails