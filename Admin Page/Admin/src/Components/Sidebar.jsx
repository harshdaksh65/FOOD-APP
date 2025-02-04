import React from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-[18%] min-h-[100vh] border border-t-0 border-2 border-gray-300'>
        <div className='px-8 py-6 flex flex-col gap-4'>
            <NavLink to='/add' className='flex items-center  gap-2 border border-red-200 cursor-pointer rounded-lg px-4 py-2 active:bg-red-200'>
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className='flex items-center  gap-2 border border-red-200 cursor-pointer rounded-lg px-4 py-2 active:bg-red-200'>
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='orders' className='flex items-center  gap-2 border border-red-200 cursor-pointer rounded-lg px-4 py-2 active:bg-red-200'>
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar