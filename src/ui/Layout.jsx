import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Settings from './SideBar'
import Header from './Header'
import SideBar from './SideBar'

function Layout() {

  // lg:grid class for displaying sidebar in side


  return (
    <div className=' w-full layout-container'>

{/* <Header/> */}
<SideBar/> 

<main className='flex  py-9 sm:px-4'>
    <Outlet/>
</main>
    </div>
  )
}

export default Layout