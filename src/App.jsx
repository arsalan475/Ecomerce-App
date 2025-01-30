import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import Navbar from './ui/Navbar'
import Layout from './ui/Layout'
import ProductOverview from './ui/ProductOverview'
import EditProductDetails from './ui/EditProductDetails'
import CheckOut from './features/order/CheckOut'
import PlaceOrder from './features/order/PlaceOrder'
import PlaceOrderCard from './ui/PlaceOrderCard'
import { useSelector } from 'react-redux'
import AllOrder from './features/order/AllOrder'


function App() {
  const data = useSelector(({order}) => order.orders )

  return (
    <BrowserRouter>

    <Routes>
      <Route  element={<Layout/>}>
      <Route index element={<Navigate replace to='/menu'/>} />
      <Route path='menu' element={<Menu/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='product-overview/:id' element={<ProductOverview/>}/>
      <Route path='edit-product-details/:id' element={<EditProductDetails/>}/>
      
      <Route path='order' element={<Order/>}>
      <Route path='all-orders' element={<AllOrder/>}/>
      <Route path='place-order' element={<PlaceOrder/>}/>
      <Route path='check-out' element={<CheckOut/>}/>
      </Route>
      
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App