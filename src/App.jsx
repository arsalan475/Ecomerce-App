import React, { Suspense } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Menu from './features/menu/Menu'
// import Cart from './features/cart/Cart'
// import Order from './features/order/Order'

import Layout from './ui/Layout'
import Header from './ui/Header';
import Loader from './ui/Loader';
// import ProductOverview from './ui/ProductOverview'
// import EditProductDetails from './ui/EditProductDetails'
// import CheckOut from './features/order/CheckOut'
// import PlaceOrder from './features/order/PlaceOrder'
// import AllOrder from './features/order/AllOrder'

// const Layout = lazy(()=> import('./ui/Layout'));
const Menu = lazy(()=> import('./features/menu/Menu'));
const Cart = lazy(() => import('./features/cart/Cart'));
const Order = lazy(()=> import('./features/order/Order'));

const AllOrder =lazy(()=> import('./features/order/AllOrder'));
const PlaceOrder = lazy(()=> import('./features/order/PlaceOrder'));
const CheckOut = lazy(()=> import('./features/order/CheckOut'));
const ProductOverview = lazy(()=> import('./ui/ProductOverview'));

const EditProductDetails = lazy(()=> import('./ui/EditProductDetails'));

function App() {


  return (
    <BrowserRouter>
    <Header/>
<Suspense fallback={<Loader/>}>
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
    </Suspense>

    </BrowserRouter>
  )
}

export default App