import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Components/Add'
import List from './Components/List'
import Orders from './Components/Orders'

function App() {
  return (
    <div>
      <Navbar/>
      <hr className='w-full border border-gray-300 '/>
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App