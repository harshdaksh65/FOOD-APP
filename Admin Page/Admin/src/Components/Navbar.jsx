import React from 'react'
import {assets} from '../assets/assets.js'

function Navbar() {
  return (

    <div className='flex justify-between px-6 py-2'>
        <div>
            <h1 className='text-4xl font-bold text-red-500'>FOOD APP</h1>
            <h6 className='text-sm font-semibold text-green-600 ml-[70%]'>ADMIN</h6>
        </div>
        <div>
            <img src={assets.profile_image} alt="" />
        </div>

    </div>
  )
}

export default Navbar