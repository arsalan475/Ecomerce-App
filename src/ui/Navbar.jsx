import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {

 const total = useSelector(({cart})=> cart.total)

  return (
    <nav className='
    w-full py-4 bg-slate-50 border-b-2 border-slate-400 flex justify-end items-center
     text-slate-600 tracking-wider 
    text-xs sm:text-sm 
    '>
        <ul className='flex justify-between max-sm:px-2 sm:justify-evenly w-2/3 sm:w-1/2 font-semibold   '>
            <li><NavLink to='menu'>Menu</NavLink></li>
            <li><NavLink to='cart'>Carts <span>{total}</span></NavLink></li>
            <li><NavLink to='order/all-orders'>Order</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar